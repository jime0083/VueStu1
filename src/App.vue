<template>
  <div>
    <h1>Todo管理アプリ</h1>

    <!-- タスク入力欄 -->
    <input v-model="todoStore.newTask" placeholder="新しいタスク入力">
    <button @click="todoStore.addTask">追加</button>


    <!-- タスクリストの表示 -->
    <ul>
      <li v-for="(task,index) in todoStore.tasks" :key="index">
        {{ task }}
        <!-- 削除ボタン -->
        <button @click="todoStore.removeTask(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from './store/todoStore';

export default{
  setup(){
    const todoStore=useTodoStore();
    return{todoStore};
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  width: 70%;
}
button {
  padding: 0.5rem 1rem;
}
ul {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
}


button {
  margin-left: 1rem;
  background-color: #ff6961;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
