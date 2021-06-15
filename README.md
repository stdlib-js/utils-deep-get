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

# Deep Get

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Get a nested property value.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-deep-get
```

</section>

<section class="usage">

## Usage

```javascript
var deepGet = require( '@stdlib/utils-deep-get' );
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
var randu = require( '@stdlib/random-base-randu' );
var deepGet = require( '@stdlib/utils-deep-get' );

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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-deep-get.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-deep-get

[test-image]: https://github.com/stdlib-js/utils-deep-get/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-deep-get/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-deep-get/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-deep-get?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-deep-get
[dependencies-url]: https://david-dm.org/stdlib-js/utils-deep-get/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-deep-get/main/LICENSE

</section>

<!-- /.links -->
