# Easy User Authentication for Angular Apps

This repository hosts the application that you create by following the ["Complete Guide to Angular User Authentication with Auth0"](https://auth0.com/blog/complete-guide-to-angular-user-authentication/).

That security guide helps developers learn how to secure a Angular application by implementing user authentication. It enhances a Angular application to practice the following security concepts:

- Add user login and logout.
- Retrieve user information.
- Protect application routes.
- Call protected endpoints from an API.

The guide uses the [Auth0 Angular SDK](https://github.com/auth0/auth0-angular) to secure Angular applications, which provides Angular developers with an easier way to add user authentication to Angular applications using Observables and HTTP Interceptors.

[Check it out!](https://auth0.com/blog/complete-guide-to-angular-user-authentication/)

## Get Started

Install the client project dependencies:

```bash
npm install
```

## Set Up Authentication with Auth0

If you haven't already, <a href="https://auth0.com/signup" data-amp-replace="CLIENT_ID" data-amp-addparams="anonId=CLIENT_ID(cid-scope-cookie-fallback-name)">**sign up for a free Auth0 account**</a>.

Once you sign in, Auth0 takes you to the [Dashboard](https://manage.auth0.com/). In the left sidebar menu, click on ["Applications"](https://manage.auth0.com/#/applications).

Then, click the "Create Application" button. A modal opens up with a form to provide a name for the application and choose its type.

- **Name:** Auth0 Angular Sample

- **Application Type:** Single Page Web Applications

Click the "Create" button to complete the process. Your Auth0 application page loads up.

Your Angular application will redirect users to Auth0 whenever they trigger an authentication request. Auth0 will present them with a login page. Once they log in, Auth0 will redirect them back to your Angular application. For that redirecting to happen securely, you must specify in your **Auth0 Application Settings** the URLs to which Auth0 can redirect users once it authenticates them.

As such, click on the "Settings" tab of your Auth0 Application page and fill in the following values:


**Allowed Callback URLs**

```bash
http://localhost:4040, http://localhost:4040/callback
```

**Allowed Logout URLs**

```bash
http://localhost:4040, http://localhost:4040/external-api
```

**Allowed Web Origins**

```bash
http://localhost:4040
```

**Scroll down and click the "Save Changes" button.**

Open the Angular starter project, `auth0-angular-sample`, and create a `auth_config.json` file under the project directory:

```bash
touch auth_config.json
```

Populate `auth_config.json` as follows:

```bash
{
  "domain": "YOUR_AUTH0_DOMAIN",
  "clientId": "YOUR_AUTH0_CLIENT_ID",
  "audience": "https://express.sample",
  "serverUrl": "http://localhost:6060"
}
```

Head back to your Auth0 application page. Follow these steps to get the `domain` and `clientId` values:

![Auth0 application settings to enable user authentication](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/auth0-application-settings.png)

1. Click on the "Settings" tab, if you haven't already.

2. Use the "Domain" value from the "Settings" as the value of `domain` in `auth_config.json`.

3. Use the "Client ID" value from the "Settings" as the value of `clientId` in `auth_config.json`.

## Run the Project

Run the client project:

```bash
npm start
```

The application runs by on port `4040` to mitigate conflicting with other client applications you may be running.

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

## Test the Login Routing

Once you run the application, click on the "External API" tab.

The "External API" page is both a public and a protected page. Angular renders different functionality depending on your authentication status. As such, if you initiate the login transaction from this page, Auth0 should return you to this page once it completes the authentication process &mdash not the homepage. Otherwise, your end-users may get a confusing user experience.

Try that out!

- Click on the "Log in" button from the "External API" page. 
- After you log in with Auth0 using the Universal Login Page, Auth0 should return you to the "External API" page.

If you also log out from this page, you should remain in the page and see its public resources.

## Set up the Demo API

You can set up this Express demo server to test making secure API calls from your Angular application.

### Get the Express API demo

Clone the `auth0-express-js-sample` repo:

```bash
git clone git@github.com:auth0-blog/auth0-express-js-sample.git
```

Make the `auth0-express-js-sample` directory your current directory:

```bash
cd auth0-express-js-sample
```

Install the Node.js project dependencies:

```bash
npm install
```

### Connect the Express API with Auth0

Head to the [APIs section in the Auth0 Dashboard](https://manage.auth0.com/#/apis), and click the "Create API" button.

Then, in the form that Auth0 shows:
 
- Add a **Name** to your API:

```bash
Auth0 Express Sample
```

- Set its **Identifier** value:

```bash
https://express.sample
```

- Leave the signing algorithm as `RS256` as it's the best option from a security standpoint.

With these values in place, hit the "Create" button.

Keep this page open as you'll be using the values next.

Create a `.env` file for the API Server under the `auth0-express-js-sample` directory:

```bash
touch .env
```

Populate this `auth0-express-js-sample/.env` file as follows:

```bash
SERVER_PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
```

Head back to your Auth0 API page, and **follow these steps to get the Auth0 Audience**:

![Get the Auth0 Audience to configure an API](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/get-the-auth0-audience.png)

1. Click on the **"Settings"** tab.

2. Locate the **"Identifier"** field and copy its value.

3. Paste the "Identifier" value as the value of `AUTH0_AUDIENCE` in `.env`.

Now, **follow these steps to get the Auth0 Domain value**:

1. Click on the **"Test"** tab.
2. Locate the section called **"Asking Auth0 for tokens from my application"**.
3. Click on the **cURL** tab to show a mock `POST` request.
4. Copy your Auth0 domain, which is _part_ of the `--url` parameter value: `tenant-name.region.auth0.com`.
5. Paste the Auth0 domain value as the value of `AUTH0_DOMAIN` in `.env`.

> **Tips to get the Auth0 Domain**
> - The Auth0 Domain is the substring between the protocol, `https://` and the path `/oauth/token`.
> - The Auth0 Domain follows this pattern: `tenant-name.region.auth0.com`.
> - The `region` subdomain (`au`, `us`, or `eu`) is optional. Some Auth0 Domains don't have it.

With the `.env` configuration values set, run the API server by issuing the following command:

```bash
npm start
```
