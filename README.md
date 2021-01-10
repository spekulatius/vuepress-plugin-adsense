# Google AdSense Plugin for VuePress

Sometimes you might want ad some ads to monetize your VuePress-based documentation site or blog.


## Install

To install the VuePress plugin run one of the following commands:

```sh
npm install vuepress-plugin-adsense

# or

yarn add vuepress-plugin-adsense
```


## Configuration

Add the vuepress plugin in your site or theme config file. The configuration is done as part of the plugin-configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: [
    'google-adsense': { adClient: 'ca-pub-9502576386405849' }

    // other plugins
    // ...
  ]
}
```

You will get the required parameters from Google AdSense.

For more details on how to work with VuePress plugins check the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is release under the MIT license by [Peter Thaleikis](https://releasecandidate.dev/).
