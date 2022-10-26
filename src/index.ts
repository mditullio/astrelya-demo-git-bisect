import './app.scss';
import appHTML from './app.html';

const version = '1.3'
const title = `My Application (v${version})`;

document.title = title;
document.body.innerHTML = appHTML;
document.querySelector("#app-title").innerHTML = title;
