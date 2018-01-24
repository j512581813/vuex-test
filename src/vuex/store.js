import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		userInfo:{
			username:"",
			password:"",
		},
		count:1,
		todoList:[],
		selectType:0
	},
	mutations:{
		updateUserInfo(state,newInfo){
			state.userInfo = newInfo;
		},
		increase(state){
			state.count++;
		},
		reduce(state){
			var c = state.count--;
			if(parseInt(c)<0){
				console.log(1);
				return false;
			}else{
				state.count--;
			}			 			
		},
		addTodoList(state,content){
			var id;
			if(state.todoList.length ==0){
				id = 1;
			}else{
				id = (state.todoList.length+1);
			}
			var obj = {id:id,content:content,flag:true,};
			state.todoList.push(obj);
			state.showFlag = true;
		},
		doneTodoList(state,id){
			state.todoList.map((item,index)=>{
				if(item.id == id){
					item.flag = false;
				}
			})
		},
		selectTypeTodoList(state,type){
			state.selectType = type;
		}
	},
	getters:{
		todoListHasDone(state){
			let todoList = state.todoList.filter((item)=>{
				if(!item.flag){
					return item;
				}
			})
			return todoList;
		},
		todoListNotDone(state){
			let todoList = state.todoList.filter((item)=>{
				if(item.flag){
					return item;
				}
			})
			return todoList;
		}
	}

});

