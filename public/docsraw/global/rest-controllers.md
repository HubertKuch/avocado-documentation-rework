# Rest Controllers

In this section we will go over rest controller, mapping, request body, path and query params.

## What are rest controllers and mappings?
### What is a rest controller?
Rest controllers are simply method to create RESTful web services. They are containers which holds
mapping and resources used by that mappings. 

### What are mappings?
Mapping is simple methods which defines action on specific HTTP method and endpoint. For example client
sends us GET request to `/users/` endpoint and we want to invoke specific action for example get all users


## Base controller

To declare REST controller in Avocado you must annotate class, which will
be controller with `#[RestController]` annotation such as:

```php
#[RestController]
class UserController {
    ...
}
```

that class will read and instantiated as controller.
Every controller can has many mapping which are routes/endpoints.

## Mappings

Types of mapping:

- GET
- POST
- PUT
- PATCH
- DELETE

Every mapping must be a method in rest controller and everyone accepts endpoint and must returns
valid `Content-Type` mime data. Default `Content-Type` is `application/json` - if you don't change it
every route must return object or array which will be serialized to JSON format.
List of valid mappings annotations:

| Annotation       | HTTP method |
|------------------|-------------|
| #[GetMapping]    | GET         |         
| #[PostMapping]   | POST        |
| #[PutMapping]    | PUT         |
| #[PatchMapping]  | PATCH       |
| #[DeleteMapping] | DELETE      |

For example, we extend previous controller adding some mappings:

```php
#[RestController]
class UserController {
    
    #[GetMappings("/users/")]
    public function getAllUsers() {
        return [];
    }
}
```

## Returning data from mappings

To return data from mapping you can use three methods:

- return valid mime type data (default json - you can [change](#produces-annotation) it),
- return `ResponseBody` instance,
- return `HttpResponse` instance.

all of this three return types will be parsed to specified mime type.

## Retrieve full request or response object

To get a full `HttpRequest` you need to add parameter of `HttpRequest` type into your mapping.
Current request will be injected to that parameter. The following method works with `HttpResponse`.

## Produces annotation

Default `Content-Type` of every single mapping is `application/json`. To change it to other
you must use `Produces` annotation like in following example:

```php
...
#[GetMapping("/")]
#[Produces(ContentType::TEXT_PLAIN)]
public function plainText() {
    return "Hello world";
}
...
```

In that example `Content-Type` header will be set to `text/plain` and response body
`Hello world`.

`ContentType` enum supports every single valid `Content-Type` specify by w3.

## RequestBody annotation

Incoming data in JSON format can be parsed into specify class using `#[RequestBody]` annotation.
If incoming request will not be valid and parameter type isn't `Optional` then thrown be `InvalidRequestBodyException`
exception.

Enjoy for that example: clients sends us that body as `POST` on `/users/` endpoint

```json
{
  "username": "Coraline",
  "description": "I am a photographer"
}
```

and we have `Guest` class:

```php
class Guest {
    public function __construct(
        private string $usernamer,
        private string $description    
    ){}
    
    // getters...
}
```

then our `POST` mapping looks like:

```php
// ...
#[PostMapping("/users/")]
public function saveGuest(#[RequestBody] Guest $guest): array {
    return ["Hello, " + $guest->getUsername()];    
}
// ...
```

## Request* annotations parameters
RequestParam, RequestHeader, RequestQuery accepts also required and default value parameters:

| Param name   | type    | is required |
|--------------|---------|-------------|
| name         | string  | true        |
| defaultValue | boolean | false       |
| required     | boolean | false       |

## RequestParam annotation

Avocado allows us to declare variable in uri paths like in Laravel, Spring or Express.

Valid path variable has `:` sign before name. For example client's sends us `GET` request
on`/users/123` then our controller

```php
// ...
#[GetMapping("/users/:id")]
public function getUserById(#[RequestParam(name: "id")] int $id): User {
    return $this->userService->getUserById($id);
}
// ...
```

under `id` variable gonna be `123` value from uri string.

## RequestQuery annotation
Provides HTTP query params into mapping. For example:
```php
// ...
#[GetMapping("/users")]
public function getUsers(#[RequestQuery(name: "name", required: false)] string $name): array {
    if ($name) {
        return $this->userService->findWithName($name);
    }
    
    return $this->userService->getUsers();
}
// ...
```

## RequestHeader annotation
To retrieve header from request you can use a `RequestHeader` annotation with specific header name. 
If it's required and provided then will be under parameter in other case will produce null.

## Using optionals
Optionals are containers for value even nullable. It is a solution to present values instead of null 
which can produce `NullPointerException` or `TypeError` when parameter aren't nullable.

Every one request parameter annotation can be used with `Optional` class.

To learn more about optionals in Avocado read that [article](https://avocadoframework.com/docs/global/optionals).
