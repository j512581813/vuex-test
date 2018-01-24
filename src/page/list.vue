<template>
	<div>
		<div>
			<p v-for="(item,index) in todoList">
				<span @click="Done(item.id)" :class="{'done':!item.flag}">{{item.content}}</span>
			</p>
		</div>
		<div @click="selectType(0)">全部</div>
		<div @click="selectType(1)">已完成</div>
		<div @click="selectType(2)">未完成</div>
	</div>
</template>
<script>
	export default{
		computed:{
			todoList(){
				let type = this.$store.state.selectType;
				console.log(type)
				if(type == "1"){
					return this.$store.getters.todoListHasDone;
				}else if(type == "2"){
					return this.$store.getters.todoListNotDone;
				}else{
					return this.$store.state.todoList;
				}
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			Done(id){
				console.log(id)
				this.$store.commit("doneTodoList",id);
			},
			selectType(type){
				this.$store.commit("selectTypeTodoList",type)
			}

		}
	}
</script>
<style type="text/css">
	.done{
		color:red;
	}
</style>