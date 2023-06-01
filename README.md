# obsolog-js

This is the package of [Obsolog](https://obsolog.vercel.app), the Dead-Simple Monitoring Tool!

## Installation

Using npm:

```
npm install obsolog-js
```

Using yarn:

```
yarn add obosolog-js
```

Using pnpm

```
pnpm add obsolog-js
```

## Usage

After creating and storing your API Key, add it to your `.env` file, create your Obsolog client:

```js
const obsolog = new Obsolog({
  token: 'TOKEN_HERE'
})
```

Then, track your events like this:

```js
obs.trackEvent({
  name: 'Event name',
  description: 'Description',
  user: 'some-user-id',
  channel: 'auth.user'
})
```
