### Instructions

The objective of this project is to condense the CSS code from the CSS Resume project with [LESS](http://lesscss.org). [LESS](http://lesscss.org) is a preprocessor which extends CSS. It allows for use of [variables](http://lesscss.org/features/#variables-feature), [nesting](http://lesscss.org/features/#features-overview-feature-nested-rules), [mixins](http://lesscss.org/features/#mixins-feature), [operators](http://lesscss.org/features/#features-overview-feature-operations) and [functions](http://lesscss.org/functions/); keeping your CSS organized and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).


To view styled project in browser, code will need to be [compiled](http://lesscss.org/usage/#command-line-usage).

To install globally:

~~~~~~
$ npm install less -g
~~~~~~

Usage example to compile styles.less to styles.css:

~~~~~~
$ lessc bootstrap.less bootstrap.css
~~~~~~

This will update code. This will have to be done before viewing any changes made in the browser.

#### Further Reading
How to get started with Less - [blogpost](http://designshack.net/articles/css/using-less-js-to-simplify-your-css3).


### Basic Req's

* The LESS Resume should contain [variables](http://lesscss.org/features/#variables-feature)
* Should have [nested elements](http://lesscss.org/features/#features-overview-feature-nested-rules)
* Should have [mixins](http://lesscss.org/features/#mixins-feature), at least one [parametric mixin](http://lesscss.org/features/#mixins-parametric-feature) and one [guarded mixin](http://lesscss.org/features/#mixin-guards-feature)
* Should use built in [functions](http://lesscss.org/functions/) to change color hues for hover effects
