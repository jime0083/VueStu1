<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-start py-10">
    <div class="bg-white w-full max-w-md p-6 rounded shadow">
      <h1 class="text-2xl font-bold text-center mb-4">Todo管理アプリ</h1>
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodoStore } from './store/todoStore';

const todoStore=useTodoStore();

// アプリ起動時にローカルストレージから読み込み
onMounted(()=>{
  todoStore.loadTasksFromStorage();
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
