import Layer from './components/layer/layer.js';
import '../style/common.css';
const App = function(){
	var dom = document.getElementById('app');
	var layer = new Layer();
	dom.innerHTML = layer.tpl({
		name:'王伟俊',
		arr:[1,2,3,4,5],
	})
	console.log(layer.tpl,__dirname)
}
new App()