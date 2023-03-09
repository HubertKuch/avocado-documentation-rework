# Middleware

Middleware are the methods invoked before invoke specific mapping. They can return errors,
give data into mapping, validate and what else you like.

## Before route annotation

Before route annotation can annotate classes and methods.

- If annotates class then every request into that controller must successfully go over
  by everyone middleware method in the stack.
- If annotates mapping method only request into that specific route must successfully go over
  by all methods in the stack.

Before route syntax:

```php
// Every single route must pass `Authenticator::requiresAuthentication` method.
#[RestController]
#[BeforeRoute(["Authenticator", "requiresAuthentication"])]
class UserAuthController {
    #[Autowired]
    private UserService $userService;
    
    // That route must pass two methods: `Authenticator::requiresAuthentication` and `Authenticator::requiresAdmin`. 
    #[GetMapping("/users")]
    #[BeforeRoute(["Authenticator", "requiresAdmin"])]
    public function adminRoute() {
        return $this->userService->getAll(); 
    }
}
```

## Next class
Middleware to pass successfully must return `Next` instance. Every else data returned by middleware method will 
reject requests.

```php
// ...
public function requiresAuthentication(HttpRequest $request, HttpResponse $response): Next|null {
  // success
  if (!$request->locals['user']->isAdmin()) {
    return null;
  }
  
  // reject
  return new Next();
}
// ...
```

## Move data between middlewares
To retrieve data from previous middlewares you can store and get data from `HttpRequest` `locals` property. In previous example
previous methods (Authenticator::requiresAuthentication) sets `user` into locals and `requiresAuthentication` methods has access 
to that data and can check is logged-in user is admin.

## Get data from middleware in mapping
To get data from middleware you can `HttpRequest` and `locals` array like between middleware or use `RequestStorageItem` annotation.

```php
#[GetMapping("/logged")]
public function getLoggedInUser(HttpRequest $request) {
  return $request->locals['user'];
}
```
Or
```php
#[GetMapping("/logged")]
public function getLoggedInUser(#[RequestStorageItem(name: "user")] User $user) {
  return $user;
}
```
Both methods do the same job which you like is up to you.