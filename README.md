# psycokenisis.github.io
a place I call home

### Branches
- `master` is used by github as the source branch for the page hosting.
- `development` is used as the primary branch where development occurs.

When a deployment is required, simply execute `npm run deploy` from the `development` branch.
Under the hood, this will build and export the `/dist` directory into the `master` branch, which then allow it to be served via GitHub :)

`npm run deploy` is only necessary whenever a deployment is required.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test

# Deploy to github pages
npm run deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
