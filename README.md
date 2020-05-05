# Express Subdomains

A quick example.

To run this app, put these lines in `/etc/hosts`:

```text
127.0.0.1	mysite.local
127.0.0.1	cats.mysite.local
127.0.0.1	dogs.mysite.local
```

Then do:

```text
$ npm install
$ npm start
```

and visit `mysite.local` in your browser.
