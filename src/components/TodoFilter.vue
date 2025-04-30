<template>
    <div class="filter-buttons">
        <button :class="{active:todoStore.filter==='all'}" @click="todoStore.filter='all'">すべて</button>
        <button :class="{active:todoStore.filter==='active'}" @click="todoStore.filter='active'">未完了</button>
        <button :class="{active:todoStore.filter==='completed'}" @click="todoStore.filter='completed'">完了</button>
    </div>
</template>

<script setup>
import { useTodoStore } from '../store/todoStore';
const todoStore=useTodoStore();
</script>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
button {
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
}
button.active {
  background-color: #42b983;
  color: white;
}
</style>