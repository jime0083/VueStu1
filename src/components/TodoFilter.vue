<template>
    <div class="flex gap-2 justify-center mb-4">
        <button 
        v-for="type in ['all','active','completed']"
        :key="type"
        @click="todoStore.filter=type"
        :class="[
          'px-3 py-1 rounded',
          todoStore.filter===type?'bg-blue-500 text-white':'bg-gray-200 text-gray-700'
        ]">
          {{ 
            type==='all'?'全て':
            type==='active'?'未完了':'完了'
            }}
        </button>
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