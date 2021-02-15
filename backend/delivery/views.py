import json
from datetime import timedelta, datetime

from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponse
from firebase_admin import exceptions

from delivery.models import Client, Restaurant
from delivery.utils.firebase import firebase_auth


def login(request):
    try:
        id_token = json.loads(request.body).get('id_token')

        expires_in = timedelta(days=30)
        session_cookie = firebase_auth.create_session_cookie(id_token, expires_in=expires_in)
        response = HttpResponse(status=200)
        response.set_cookie(
            settings.FB_SESSION_COOKIE,
            session_cookie,
            expires=datetime.now() + expires_in,
        )
        return response
    except json.JSONDecodeError:
        return HttpResponse('IdToken missing', status=400)
    except exceptions.FirebaseError:
        return HttpResponse('Failed to create a session cookie', status=401)


def client_signup(request):
    try:
        data = json.loads(request.body)
        if 'id_token' not in data:
            return HttpResponse('IdToken missing', status=400)

        id_token = data['id_token']
        decoded_token = firebase_auth.verify_id_token(id_token)
        user = create_user(decoded_token)
        Client.objects.create(
            user=user,
            photo=decoded_token.get('picture')
        )
        return provide_session_cookie(id_token)
    except json.JSONDecodeError:
        return HttpResponse('IdToken missing', status=400)
    except ValueError:
        return HttpResponse('Failed to create user', status=401)


def restaurant_signup(request):
    try:
        data = json.loads(request.body)
        if 'id_token' not in data:
            return HttpResponse('IdToken missing', status=400)

        id_token = data['id_token']
        decoded_token = firebase_auth.verify_id_token(id_token)
        user = create_user(decoded_token)
        Restaurant.objects.create(
            administrator=user,
            name=request.POST['name'],
            description=request.POST['description'],
        )
        return provide_session_cookie(id_token)
    except json.JSONDecodeError:
        return HttpResponse('IdToken missing', status=400)
    except KeyError:
        return HttpResponse('Incorrect data provided', status=400)
    except ValueError:
        return HttpResponse('Failed to create user', status=401)


def create_user(decoded_token):
    uid = decoded_token['uid']
    if User.objects.filter(username=uid).exists():
        raise ValueError('User already exists')

    return User.objects.create_user(
        username=uid,
        email=decoded_token['email'],
        first_name=decoded_token.get('name', ''),
        last_name='',
    )


def provide_session_cookie(id_token):
    expires_in = timedelta(days=14)
    try:
        session_cookie = firebase_auth.create_session_cookie(id_token, expires_in=expires_in)
        response = HttpResponse(status=200)
        response.set_cookie(
            settings.FB_SESSION_COOKIE,
            session_cookie,
            expires=datetime.now() + expires_in,
        )
        return response
    except exceptions.FirebaseError:
        return HttpResponse('Failed to create a session cookie', status=401)
