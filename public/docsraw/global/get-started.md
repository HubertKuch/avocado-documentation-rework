# Get started

## Creating Avocado application from template

#### Requirements

- PHP version 8.1 or higher
- Docker version with `compose`

In this section we will create your first app using Avocado 8.0 and Apache server.
All what you need is Docker and PHP.

To initialize project using template you need to run the following command in your
terminal (without `>` sign that only means that is command):

```bash
> composer create-project hubert/avocado-docker-apache2-template demo -s dev
```

Then when installed successfully enter into directory (if you used other project name replace demo with that name):

```bash
> cd demo
```

update project:

```bash
> composer update --ignore-platform-reqs
```

and you can run container:

```bash
> docker compose up --build
```

That's all, when you go to [localhost](https://localhost) should be visible json array such

```json
[
  "Hello world"
]
```

## Using XAMPP

If you are using XAMPP packet you can simply create project like in previous section but in
XAMPP `htdocs` directory:

- On Windows that should be `C:/xampp/htdocs/`,
- default Linux XAMPP htdocs directory is `/opt/lampp/htdocs/`

And your app should be on https://127.0.0.1/demo/ (if you used other project name only replace demo with that name).

## Clean Apache2

You need create VirtualHost and give location to your app.

Sample VirtualHost configuration is following:
```apacheconf
<VirtualHost :80>
    ServerName          localhost
    DocumentRoot        /path/to/your/project # in many cases it's /var/www/html
    
    <Directory /path/to/your/project>
        AllowOverride   All
        Require         all granted
    </Directory>
</VirtualHost>
```
