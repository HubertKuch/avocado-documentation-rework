# Sending request from frontend web service
Int this article we go over methods to send request and retrieve
response on web frontend.

## Using `Fetch API`
In JavaScript ES6 incomes new API called `Fetch API` which 
provides only one method: `fetch`, and three interfaces: `Headers`,
`Request` and `Response`.

That's allows us easily send and retrieve data from any REST API.

Consider that example of GET mapping that's returns us `Guest` object.

```php
class Guest {
    private string $name;
    private string $description;
}

#[RestController]
class GuestController {
    
    #[Autowired]
    private GuestService $guestService;
    
    #[GetMapping("/guest/:name")]
    public function getGuestByName(#[RequestParam(name: "name")] string $name): Guest {
        // returns Guest[name="John", description="Hello, I am John and I am a photographer"]
        return $this->guestService->findByName($name);
    }
}
```

on frontend, we can use `fetch` method to get data from that mapping 
(requires async function because promises):

```javascript
const name = "John";
const response = await fetch(`http://localhost/guest/${name}`);
const data = await response.json();

// display `Hello, John` in Console
console.log(`Hello, ${data.name}`);
```

## Using `_method` field
HTML allows us to declare forms with HTTP methods, but it restricts
to GET and POST methods without DELETE, PUT and PATCH.

Avocado supports `_method` body field which changes a METHOD.

Syntax is simply:
```html
<form action="/guest">
    <input type="hidden" name="_method" value="PUT">
    <input type="text" name="name">
    <input type="text" name="description">
    <button type="submit">Login as Guest</button>
</form>
```

That form on submit sends request to PUT `/guest` mapping.
