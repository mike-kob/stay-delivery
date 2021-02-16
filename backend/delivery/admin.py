from django.contrib import admin
from django.utils.html import format_html

from delivery.models import Client, Restaurant, Location, Dish, Tag


class ClientAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user_email',
        'phone',
        'address',
    )
    list_select_related = ('user',)

    def user_email(self, obj):
        return obj.user.email


class LocationInline(admin.StackedInline):
    model = Location
    extra = 0

    fields = (
        "id",
        "address",
    )


class DishInline(admin.StackedInline):
    model = Dish
    extra = 0
    verbose_name = "Dish"
    verbose_name_plural = "Menu"

    fields = (
        "id",
        "name",
        "description",
        "weight",
        "price",
        "photo",
        "photo_img",
        "tags",
    )
    readonly_fields = ("photo_img",)

    def photo_img(self, obj):
        return format_html(
            f'<a href="{obj.photo}" target="_blank">'
            f'<img src="{obj.photo}" width="300px">'
            f"</a>"
        )


class RestaurantAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'description',
        'photo_img',
        'admin_email',
    )
    list_select_related = ('administrator',)
    readonly_fields = ('administrator',)
    inlines = (LocationInline, DishInline,)

    def admin_email(self, obj):
        return obj.administrator.email

    def photo_img(self, obj):
        return format_html(
            f'<a href="{obj.photo}" target="_blank">'
            f'<img src="{obj.photo}" width="100px">'
            f"</a>"
        )


class TagAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
    )


admin.site.register(Tag, TagAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
