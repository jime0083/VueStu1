<template>
  <div>
    <h1>Todo管理アプリ</h1>

    <!-- タスク入力欄 -->
    <input v-model="newTask" placeholder="新しいタスク入力">
    <button @click="addTask">追加</button>
    <!-- タスクリストの表示 -->

    <ul>
      <li v-for="(task,index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default{
  setup(){
    const newTask=ref('');   // 入力された新しいタスク
    const tasks=ref([]);    // タスクリスト（配列）

    // タスクを追加する関数
    const newTask=()=>{
      if(newTask.value.trim() !==''){
        tasks.value.push(newTask.value);    // 入力値をリストに追加
        newTask.value='';     // 入力欄をクリア
      }
    };

    return{
      newTask,
      tasks,
      addTask
    };
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
</style>
