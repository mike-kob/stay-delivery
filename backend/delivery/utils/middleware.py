from django.conf import settings
from django.contrib.auth.models import User
from django.utils.deprecation import MiddlewareMixin

from delivery.utils.firebase import firebase_auth


class FirebaseAuthentication(MiddlewareMixin):
    def __init__(self, get_response):
        super().__init__(get_response)
        self.get_response = get_response

    def process_request(self, request):
        session_cookie = request.COOKIES.get(settings.FB_SESSION_COOKIE)
        try:
            decoded_claims = firebase_auth.verify_session_cookie(session_cookie, check_revoked=True)
            user = User.objects.get(username=decoded_claims['uid'])
            setattr(request, 'user', user)
        except firebase_auth.InvalidSessionCookieError:
            # Session cookie is invalid, expired or revoked. Force user to login.
            pass
        except User.DoesNotExist:
            pass
