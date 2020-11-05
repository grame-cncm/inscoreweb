
# Welcome to the INScore JS Online Editor


The [INScore Online Editor](https://grame-cncm.github.io/inscoreweb/) is based on [INScore](https://inscore.grame.fr/), an environment for the design of interactive, augmented musica scores.


## Building

Firstly ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo then change to the directory:

~~~~~~
$ git clone https://github.com/grame-cncm/inscoreweb.git
$ cd inscoreweb
~~~~~~

Install dev dependencies:
~~~~~~
$ npm install
~~~~~~

To build everything: 
~~~~~~
$ make
~~~~~~

To test, open an http server from the `docs` folder e.g.
~~~~~~
$ cd docs
$ python -m http.server
~~~~~~

Note that you can disable CORS security on Firefox and test without server: go to the `about:config` page and set  `security.fileuri.strict_origin_policy` to false.


## Build known issues

Currently the package `@types/tern` (an indirect dependency of the project) fails to compile and you'll likely get the following error message:
~~~~~~
../node_modules/@types/tern/index.d.ts:7:15 - error TS2307: Cannot find module './lib/infer'.
~~~~~~
To solve, open the file `node_modules/@types/tern/index.d.ts`and comment the export lines as follows:
~~~~~~
// export * from "./lib/infer";
// export * from "./lib/tern";
~~~~~~


## Web Interface

The editor supports several options that may be passed on the url:

- ?mode=preview    : open the editor in preview mode (equivalent to the Preview button)
- ?code=&lt;b64code>  : loads the inscore code passed as argument of the code option. This code must be encoded in base 64.
- ?src=&lt;url> : loads the inscore file indicated by the URL (note that you may face the [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) issue, but works with the embedded sample scripts)

