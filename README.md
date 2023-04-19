# Install
### View
Add import to *resources/js/app.js*:

```js
import '../../vendor/lopatin96/laravel-scroll-to-top/resources/js/scroll-to-top';
```

and include view:

```php
@include('laravel-scroll-to-top::scroll-to-top.index')
```

# Publishing
### Views
```php
php artisan vendor:publish --tag="laravel-scroll-to-top-views"
```