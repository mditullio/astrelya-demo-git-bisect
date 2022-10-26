import './app.scss';
import appHTML from './app.html';

const version = '2.0-beta'
const title = `My Application (v${version})`;

document.title = title;
document.body.innerHTML = appHTML;
document.querySelector("#app-title").innerHTML = title;
