import * as $ from 'jquery'
import Post from "@models/post";
// import json from './assets/json.json';
import WebpackLogo from './assets/webpack-logo.png';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import './styles/styles.css';

const post = new Post('Webpack title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('JSON result: ', json)
// console.log('XML result: ', xml)
// console.log('CSV result: ', csv)