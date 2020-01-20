# SpicaUsersDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

Run `npm install -g @angular/cli` to install Angular CLI as well as `npm install --save-dev @angular-devkit/build-angular`

## Development server with proxy

Modify `proxy.config.json` file: 
"start": "ng serve --proxy-config proxy.config.json",

```js
{
    "/timeapi/*": {
      "target": "http://<host>:<port>",
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
    }
}
```

and file `proxy.config.json` with:
```js
"start": "ng serve --proxy-config proxy.config.json"
```

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Settings

Enter Api Url & token to continue. The url and token are locally stored therefore no need to enter them next time.

## Users page

Users page shows current employees.

Search by First and Last name by typing inside the search box.

Add new User by navigating to "Add User" tab and enter values. Note that all fields need to be correctly entered (e.g. Maticna st. requires 13 numbers).

## Presence page

User is able to see current employee presence by picking a date & time - i.e. shows if the employee has been pressent since entered time.