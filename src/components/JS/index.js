import Vue from 'vue'
import MessageBox from './MessageBox'

export var messagebox = (function(){
	var defaults = {
		title:'',
		content:'',
		cancel:'',
		ok:'',
		handleToCancel:null,
		handleToOk:null
	}

	var MyComponent = Vue.extend(MessageBox)

	return function(opts){
		for(var attr in opts){
			defaults[attr] = opts[attr]
		}

		var vm = new MyComponent({
			el:document.createElement('div'),
			data:{
				title:defaults.title,
				content:defaults.content,
				cancel:defaults.cancel,
				ok:defaults.ok
			},
			methods:{
				handleToCancel(){
					defaults.handleToCancel && defaults.handleToCancel.call(this)
					document.body.removeChild(vm.$el);
				},
				handleToOk(){
					defaults.handleToOk && defaults.handleToOk.call(this)
					document.body.removeChild(vm.$el);
				}
			}
		});
		document.body.appendChild(vm.$el);
	}
})()