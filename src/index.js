import _ from 'lodash';//es6 lodash导出的默认变量用下划线来接收
import './style/index.css';

function createDomElement(){
	let dom = document.createElement('div');
	dom.innerHTML = _.join(["aicode",'.com',' wow'],'');
	dom.classList.add('box');
	return dom;
}

document.body.appendChild(createDomElement());