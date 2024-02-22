<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Deep Get

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Get a nested property value.



<section class="usage">

## Usage

```javascript
import deepGet from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-get@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-deep-get/tags). For example,

```javascript
import deepGet from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-get@v0.2.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-get@deno/mod.js';
```

#### deepGet( obj, path\[, options] )

Returns a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, 'a.b.c' );
// returns 'd'
```

For `paths` including `arrays`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ {'x': 5} ] },
    { 'a': [ {'x': 10} ] }
];

var val = deepGet( arr, '1.a.0.x' );
// returns 10
```

The key `path` may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, [ 'a', 'b', 'c' ] );
// returns 'd'
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.

By default, the function assumes `dot` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = deepGet( obj, 'a/b/c', {
    'sep': '/'
});
// returns 'd'
```

#### deepGet.factory( path\[, options] )

Creates a reusable deep get function. The factory method ensures a `deepGet` function is configured identically by using the same set of provided `options`.

```javascript
var dget = deepGet.factory( 'a/b/c', {
    'sep': '/'
});
```

#### dget( obj )

Returns a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var dget = deepGet.factory( 'a.b.c' );

var obj = { 'a': { 'b': { 'c': 'd' } } };

var val = dget( obj );
// returns 'd'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import deepGet from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-get@deno/mod.js';

var data;
var keys;
var val;
var i;

data = new Array( 100 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = {
        'x': Date.now(),
        'y': [ randu(), randu(), i ]
    };
}

keys = [ 0, 'y', 2 ];
for ( i = 0; i < data.length; i++ ) {
    keys[ 0 ] = i;
    val = deepGet( data, keys );
    console.log( val );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-deep-pluck`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>
-   <span class="package-name">[`@stdlib/utils-deep-set`][@stdlib/utils/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-deep-get.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-deep-get

[test-image]: https://github.com/stdlib-js/utils-deep-get/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-deep-get/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-deep-get/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-deep-get?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-deep-get.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-deep-get/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-deep-get/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-deep-get/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-deep-get/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-deep-get/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-deep-get/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-deep-get/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-deep-get/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-deep-get/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils-deep-pluck/tree/deno

[@stdlib/utils/deep-set]: https://github.com/stdlib-js/utils-deep-set/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
