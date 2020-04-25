/* eslint-disable */
const fs = require("fs");
const path = require("path");
const entry = "examples";
const dirTree = require("directory-tree");
const filteredTree = dirTree("examples", { extensions: /\.inscore/, normalizePath: true });
fs.writeFileSync("examples.json", JSON.stringify(filteredTree));
