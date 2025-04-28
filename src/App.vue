<template>
  <div class="container">
    <h1>Todo管理アプリ</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
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
