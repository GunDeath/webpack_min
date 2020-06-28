import * as $ from 'jquery'
import Post from "@models/post";
import './styles/less/style.less'
import WebpackLogo from './assets/webpack-logo.png';
import './bable'
import './styles/styles.css';
import './styles/scss/style.scss';


const post = new Post('Webpack title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('JSON result: ', json)
// console.log('XML result: ', xml)
// console.log('CSV result: ', csv)