# Http consumers in Avocado

Avocado gives us `HttpConsumer` interface and internal implementation which is used
by default. That interface allows us to implement own http managers.

In this section we learn more about what is http consumer, how to exclude default implementation
and how implement our own.

## What is Http consumer?

Http consumer is a simple class with `consume` method which will be invoked with `ResponseBody` parameter on
mapping call.

For example `MainHttpConsumer` provides three strategies of working with responses: of `HttpResponse` instance,
`ResponseBody` instance and raw data for example `User` object, arrays, numbers and everything else related on
mapping mime type.

## Methods

| Name    | Params       | description                                                             |
|---------|--------------|-------------------------------------------------------------------------|
| consume | ResponseBody | Consuming data returned by endpoint invoked on invoked mapping response |

## Excluding default consumer

To exclude `MainHttpConsumer` from our app we have to annotate main application class with `Exclude` annotation and
give `MainHttpConsumer` FQN into excluded array.

```php
#[Avocado]
#[Exclude([MainHttpConsumer::class])]
class PetsApplication {
    // ...
}
```

## Own implementation

To implement our own implementation of `HttpConsumer` we need to create class which implements `HttpConsumer`
and annotate it with `Resource` annotation.

For example:

```php
class InternalServerErrorHttpConsumer implements HttpConsumer {
    public function consume(ResponseBody $responseBody) {
        HttpResponse::withStatus(HTTPStatus::INTERNAL_SERVER_ERROR);
        
        return "We are sorry but our servers had to break down."
    }
}
```

In this situation every single request will end with HTTP status code `500` and information that's
servers are broken.

## HttpConsumingStrategy interface
If you want to hold your response consuming strategies in seperated classes 
you can use `HttpConsumingStrategy` interface and implement it. It isn't required but helps.