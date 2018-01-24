<template>
	<div>
		<div v-text="$store.state.userInfo.username"></div>
		<button @click="add()">增加</button> 
		<span v-text="$store.state.count"></span>
		<button @click="reduce()">减少</button>
		<div class="addItem">
			<input type="text" v-model="toText">
			<button class="add-btn" @click="addItem()">添加代办事项</button>
		</div>
		<List ></List>
	</div>
</template>
<script>
	import List from "./List";
	export default{
		data(){
			return{
				count:0,
				toText:"",
				
			}
		},
		methods:{
			add(){
				this.$store.commit("increase");	
			},
			reduce(){
				this.$store.commit("reduce");
			},
			addItem(){
				this.$store.commit("addTodoList",this.toText);
				this.toText="";
			}
		},
		components:{
			List,
		}
	}
</script>
<style type="text/css">
  input{
    width: 200px;
    height:35px;
    border-radius: 2px;
    border:1px solid #a5a5a5;
    margin-top: 10px;
    padding-left: 5px;
  }
  .add-btn{
    width: 120px;
    height: 37px;
    background-color: #42b983;
    color:white;
    border-radius: 2px;
    border:1px solid #42b983;
  }
  .addTodo{
    width: 310px;
    height: 40px;
    margin:0 auto;
  }
</style>