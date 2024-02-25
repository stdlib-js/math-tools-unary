<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Unary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiple dispatch for unary mathematical functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dispatch = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-tools-unary@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dispatch = require( 'path/to/vendor/umd/math-tools-unary/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-tools-unary@v0.2.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dispatch;
})();
</script>
```

#### dispatch( table )

Returns a function which dispatches to specified functions based on input argument types.

<!-- eslint-disable array-element-newline -->

```javascript
var nabs = require( '@stdlib/math-base-special-abs' );
var dabs = require( '@stdlib/math-strided-special-dabs' );
var sabs = require( '@stdlib/math-strided-special-sabs' );
var gabs = require( '@stdlib/math-strided-special-abs' );

var table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );
```

The function accepts the following arguments:

-   **table**: resolution table object which maps input argument types to corresponding implementations.

A `table` resolution object may contain one or more of the following fields:

-   **scalar**: strided look-up table for scalar arguments. Implementation functions must accept a single input argument: a scalar value. Supported data types: `'number'` and `'complex'`.

-   **array**: strided look-up table for array-like object arguments. Implementation functions must follow strided array interface argument conventions:

    ```text
    fcn( N, x, strideX, y, strideY )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: input strided array.
    -   **strideX**: index increment for `x`.
    -   **y**: destination strided array.
    -   **strideY**: index increment for `y`.

    Supported array data types consist of all supported [ndarray][@stdlib/ndarray/dtypes] data types.

-   **ndarray**: strided look-up table for [`ndarray`][@stdlib/ndarray/ctor] arguments. Implementation functions must follow strided array ndarray interface argument conventions:

    ```text
    fcn( N, x, strideX, offsetX, y, strideY, offsetY )
    ```

    where

    -   **N**: number of indexed elements.
    -   **x**: input strided array (i.e., underlying input [`ndarray`][@stdlib/ndarray/ctor] buffer).
    -   **strideX**: index increment for `x`.
    -   **offsetX**: starting index for `x`.
    -   **y**: destination strided array (i.e., underlying output [`ndarray`][@stdlib/ndarray/ctor] buffer).
    -   **strideY**: index increment for `y`.
    -   **offsetY**: starting index for `y`.

    Supported data types consist of all supported [ndarray][@stdlib/ndarray/dtypes] data types.

Each strided look-up table should be comprised as follows:

```text
[ <dtype>, <fcn>, <dtype>, <fcn>, ... ]
```

If an argument's data type is **not** found in the argument's corresponding look-up table and if a `'generic'` data type is present in that same table, the returned dispatch function will resolve the "generic" implementation. In other words, an implementation associated with a `'generic'` data type will be treated as the default implementation.

If unable to resolve an implementation for a provided argument data type, the returned function throws an error.

* * *

#### dispatcher( x )

Dispatches to an underlying implementation based the data type of `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var nabs = require( '@stdlib/math-base-special-abs' );
var dabs = require( '@stdlib/math-strided-special-dabs' );
var sabs = require( '@stdlib/math-strided-special-sabs' );
var gabs = require( '@stdlib/math-strided-special-abs' );

var table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );

var y = abs( -1.0 );
// returns 1.0
```

The returned dispatch function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor], array-like object, or number. If provided an [`ndarray`][@stdlib/ndarray/ctor] or array-like object, the function performs element-wise computation.

If provided an [`ndarray`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having the same shape and data type as `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var dabs = require( '@stdlib/math-strided-special-dabs' );
var sabs = require( '@stdlib/math-strided-special-sabs' );
var gabs = require( '@stdlib/math-strided-special-abs' );
var array = require( '@stdlib/ndarray-array' );

var table = {
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

var abs = dispatch( table );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ); // 2x2
var y = abs( x );
// returns <ndarray>

var v = y.get( 0, 1 );
// returns 2.0
```

If provided an array-like object, the function returns an array-like object having the same length and data type as `x`.

<!-- eslint-disable array-element-newline -->

```javascript
var dabs = require( '@stdlib/math-strided-special-dabs' );
var sabs = require( '@stdlib/math-strided-special-sabs' );
var gabs = require( '@stdlib/math-strided-special-abs' );
var Float64Array = require( '@stdlib/array-float64' );

var table = {
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ]
};

var abs = dispatch( table );

var x = new Float64Array( [ -1.0, -2.0 ] );
var y = abs( x );
// returns <Float64Array>[ 1.0, 2.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-dabs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-sabs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-abs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-tools-unary@v0.2.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var table;
var sub;
var abs;
var sh;
var x;
var y;
var i;

// Define a table for resolving unary functions based on argument data types:
table = {
    'scalar': [
        'number', nabs
    ],
    'array': [
        'float64', dabs,
        'float32', sabs,
        'generic', gabs
    ],
    'ndarray': [
        'float64', dabs.ndarray,
        'float32', sabs.ndarray,
        'generic', gabs.ndarray
    ]
};

// Create a function which dispatches based on argument data types:
abs = dispatch( table );

// Provide a number...
y = abs( -1.0 );
console.log( 'x = %d => abs(x) = %d', -1.0, y );

// Provide an array-like object...
x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
y = abs( x );
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x_%d = %d => abs(x_%d) = %d', i, x[ i ], i, y[ i ] );
}

// Provide an ndarray...
x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
sh = x.shape;

y = abs( x );
for ( i = 0; i < x.length; i++ ) {
    sub = ind2sub( sh, i );
    console.log( 'x_%d%d = %d => abs(x_%d%d) = %d', sub[ 0 ], sub[ 1 ], x.iget( i ), sub[ 0 ], sub[ 1 ], y.iget( i ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-tools-unary.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-tools-unary

[test-image]: https://github.com/stdlib-js/math-tools-unary/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-tools-unary/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-tools-unary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-tools-unary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-tools-unary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-tools-unary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-tools-unary/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-tools-unary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-tools-unary/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-tools-unary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-tools-unary/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-tools-unary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-tools-unary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-tools-unary/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd

</section>

<!-- /.links -->
