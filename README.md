# IP location data API

### Prerequisites:

You will need `node` and `npm` or `yarn` installed globally on your machine.
Please make sure that Node version is 18 or above (version >= 18). For easy version management, you can use [nvm](https://github.com/nvm-sh/nvm)

### Set up:

#### Environment

Create `.env` file in the root of the respository. You can use .env.example file as template.

```bash
NODE_PORT=3000
DB_USERNAME=<your DB username>
DB_PASSWORD=<your DB password>
DB_NAME=ip-location-data
DB_HOST=<your DB remote/local host>
DB_PORT=27017
IPWHO_API_URL=http://ipwho.is
```

## Installation

#### Yarn

```bash
# Install dependencies
yarn install
```

#### Npm

```bash
# Install dependencies
npm install
```

## Running the app

```bash
# development:npm
$ npm run dev

# development:yarn
$ yarn dev
```

## HTTP Requests

### Look up for specific IP address location data

- **Endpoint:** `GET /api/location-data/:ip`
- **Description:** Look up for IP address data.
- **Response:** JSON object with details of IP address location.
- **Example:**

  ```http
  GET /api/location-data/8.8.8.4

  ```
