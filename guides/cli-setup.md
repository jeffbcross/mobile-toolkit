# Create a Mobile Web App with [Angular CLI](https://cli.angular.io)

Start by installing [Angular CLI](https://cli.angular.io).

```
$ npm install -g angular-cli
```

(Note: this recipe is based on version 1.0.0-beta.2 of Angular CLI.)

Then create a new project:

```
$ ng new hello-mobile --mobile
$ cd hello-mobile
```

Then serve the app:

```
$ ng serve
```

Navigate to [localhost:4200](http://localhost:4200) in your browser, and you should see a simple page that says “hello-mobile works!”.

## --mobile

Passing the `--mobile` flag when creating a new app will set up a few extra things
to help get your [Progressive Web App](https://developers.google.com/web/progressive-web-apps?hl=en)
started on the right foot:
 * A **Web Application Manifest** to give browsers information to properly install your app
 to the home screen.
 * A build step to generate an **App Shell** from your app's root component.
 * A **Service Worker** script to automatically cache your app for fast loading,
   with or without an internet connection. Note: the Service Worker is only installed in production mode, i.e. via `ng serve --prod` or `ng build --prod`.

For reference, see the example app created by Angular CLI in this repository at [/guides-example](../guides-example)

[Next, let's learn how the Web App Manifest works.](./web-app-manifest.md)
