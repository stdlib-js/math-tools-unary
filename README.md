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

> Create a function which performs element-wise computation by applying a unary function to each element in an input ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The purpose of this package is to provide a thin wrapper around a lower-level interface supporting multiple dispatch based on the data types of provided ndarray arguments. The wrapper performs the following tasks:

-   validates input arguments.
-   casts input ndarrays according to a casting policy.
-   allocates an output ndarray according to an output data type policy.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import factory from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-tools-unary@esm/index.mjs';
```

#### factory( fcn, idtypes, odtypes, policies )

Returns a function which performs element-wise computation by applying a unary function to each element in an input ndarray.

<!-- eslint-disable array-element-newline -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch@esm/index.mjs';
import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );
```

The function has the following arguments:

-   **fcn**: function which applies a unary function to each element in an ndarray and assigns results to an output ndarray.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

#### ufunc( x\[, options] )

Performs element-wise computation.

<!-- eslint-disable array-element-newline -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch@esm/index.mjs';
import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = ufunc( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function has the following parameters:

-   **x**: input ndarray.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.
-   **order**: output ndarray order.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

<!-- eslint-disable array-element-newline -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch@esm/index.mjs';
import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs';
import getDType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = ufunc( x, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'generic'
```

#### ufunc.assign( x, out )

Performs element-wise computation and assigns results to a provided output ndarray.

<!-- eslint-disable array-element-newline -->

```javascript
import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch@esm/index.mjs';
import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import zerosLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros-like@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = zerosLike( x );
// returns <ndarray>

var out = ufunc.assign( x, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var arr = ndarray2array( out );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The method has the following parameters:

-   **x**: input ndarray.
-   **out**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A provided unary function should have the following signature:

    ```text
    f( x, y )
    ```

    where

    -   **x**: input ndarray.
    -   **y**: output ndarray.

-   The output data type policy only applies to the function returned by the main function. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import base from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs';
import basef from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-uniform@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dispatch@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import unary from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs';
import ufunc from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-tools-unary@esm/index.mjs';

// Create a function which dispatches based on argument data types:
var types = [
    'float64', 'float64',
    'float32', 'float32',
    'generic', 'generic'
];
var data = [
    base,
    basef,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

// Define the supported input and output data types:
var idt = [ 'float64', 'float32', 'generic' ];
var odt = [ 'float64', 'float32', 'generic' ];

// Define dispatch policies:
var policies = {
    'output': 'same',
    'casting': 'none'
};

// Create a function that performs element-wise computation:
var abs = ufunc( dispatcher, [ idt ], odt, policies );

// Generate an array of random numbers:
var x = uniform( [ 5, 5 ], -10.0, 10.0, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

// Perform element-wise computation:
var y = abs( x );
console.log( ndarray2array( y ) );

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-tools-unary.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-tools-unary

[test-image]: https://github.com/stdlib-js/math-tools-unary/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/math-tools-unary/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-tools-unary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-tools-unary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-tools-unary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-tools-unary/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies/tree/esm

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray-input-casting-policies/tree/esm

</section>

<!-- /.links -->
