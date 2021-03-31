from django.contrib import admin
from django.utils.html import format_html

from delivery.models import Client, Restaurant, Location, Dish, Tag, Order, Courier


class ClientAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user_email',
        'phone',
        'address',
    )
    list_select_related = ('user',)

    actions = (
        'block_client',
    )

    def block_client(self, request, queryset):
        pass

    block_client.short_description = 'Block client'

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
    actions = (
        'block_restaurant',
    )

    def block_restaurant(self, request, queryset):
        pass

    block_restaurant.short_description = 'Block restaurant'

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


class CourierAdmin(admin.ModelAdmin):
    pass


class OrderAdmin(admin.ModelAdmin):
    list_filter = ('date',)

    list_display = (
        'client',
        'restaurant',
        'date',
        'payment',
        'delivered',
    )


admin.site.register(Tag, TagAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Courier, CourierAdmin)
