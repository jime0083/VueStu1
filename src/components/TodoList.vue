<template>
    <!-- タスクリストの表示 -->
    <ul>
        <li v-for="(task,index) in todoStore.filteredTasks" 
        :key="index"
        class="flex justify-between items-center border-b py-2"
        >
        <!--  チェックボックス -->
        <!-- <input type="checkbox" :checked="task.completed" @change="todoStore.toggleTask(index)"> -->

        <!--  完了タスク打消し線 -->
        <span :class="{completed:task.completed}">
            {{ task.text }}
        </span>

        <div class="flex gap-2">
          <button @click="todoStore.toggleTask(index)" class="text-sm text-green-600 hover:underline">
            {{ task.completed?'未完了':'完了' }}
          </button>
          <!-- 削除ボタン -->
          <button @click="todoStore.removeTask(index)" class="text-sm text-red-500 hover:underline">削除</button>
        </div>
        </li>
    </ul>
</template>

<script setup>
import { useTodoStore } from '../store/todoStore';
const todoStore=useTodoStore();
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
li {
  margin-bottom: 0.5rem;
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