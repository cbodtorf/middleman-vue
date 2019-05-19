# Middleman + VueJS

demo: [here](https://elated-mestorf-c7ce5d.netlify.com/)

### Core Tech:
> [Middleman](http://middlemanapp.com)
> [VueJS 2](https://vuejs.org/)
> [Webpack](https://webpack.github.io/)

### Install things
run `npm install`
run `bundle install`
run `yarn start`

### What's in this project?

- __root__
  - [Gemfile](/Gemfile)
  - [Gemfile.lock](/Gemfile.lock)
  - [Rakefile](/Rakefile)
  - [config.rb](/config.rb)
  - [package-lock.json](/package-lock.json)
  - [package.json](/package.json)
  - __source__
    - __images__
    - __fonts__
    - [index.html.erb](/source/index.html.erb)
    - __javascripts__
      - __components__
        - [App.vue](/source/javascripts/components/App.vue)
        - [FixedHeader.vue](/source/javascripts/components/FixedHeader.vue)
        - [TextScrambler.vue](/source/javascripts/components/TextScrambler.vue)
      - [site.js](/source/javascripts/site.js)
    - __layouts__
      - [layout.erb](/source/layouts/layout.erb)
    - __stylesheets__
      - [site.css.scss](/source/stylesheets/site.css.scss)
  - [webpack.config.js](/webpack.config.js)