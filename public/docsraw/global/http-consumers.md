# Http consumers in Avocado

Avocado provides an HttpConsumer interface and an internal implementation that is used by default. This interface allows
us to implement our own HTTP managers.

In this section, we will learn more about what an HTTP consumer is, how to exclude the default implementation, and how
to implement our own.

## What is Http consumer?

An HTTP consumer is a simple class with a consume method that will be invoked with a ResponseBody parameter upon a
mapping call.

For example, MainHttpConsumer provides three strategies for working with responses: an HttpResponse instance, a
ResponseBody instance, and raw data, such as a User object, arrays, numbers, and anything else related to mapping MIME
type.

## Methods

| Name    | Params       | description                                                                    |
|---------|--------------|--------------------------------------------------------------------------------|
| consume | ResponseBody | Consumes data returned by the endpoint invoked on the invoked mapping response |

## Excluding default consumer

To exclude the MainHttpConsumer from our app, we need to annotate the main application class with the Exclude annotation
and give the fully qualified name (FQN) of MainHttpConsumer to the excluded array.

```php
#[Avocado]
#[Exclude([MainHttpConsumer::class])]
class PetsApplication {
    // ...
}
```

## Implementing our own HTTP consumer

To implement our own implementation of HttpConsumer, we need to create a class that implements HttpConsumer and annotate
it with the Resource annotation.

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