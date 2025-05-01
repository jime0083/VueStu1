<template>
    <div class="flex gap-2 mb-4">
        <!-- タスク入力欄 -->
        <input 
        v-model="todoStore.newTask" 
        @keyup.enter="todoStore.addTask" 
        placeholder="新しいタスク入力"
        class="flex-1 border rounded px-3 py-2"
        />
        <button @click="todoStore.addTask" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          追加
        </button>
    </div>
    <div class="search-area">
      <input v-model="todoStore.searchKeyword" placeholder="検索ワード">
    </div>
</template>

<script setup>
import { useTodoStore } from '../store/todoStore';
const todoStore=useTodoStore();
</script>

<style scoped>
.input-area {
  margin-bottom: 1rem;
}
input {
  padding: 0.4rem;
  width: 60%;
  margin-right: 0.5rem;
}
button {
  padding: 0.4rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.input-area,
.search-area {
  margin-bottom: 1rem;
}
input {
  padding: 0.4rem;
  width: 60%;
  margin-right: 0.5rem;
}
</style>