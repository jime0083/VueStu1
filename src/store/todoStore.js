import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore=defineStore('todo',()=>{
    const tasks=ref([]);        // タスクリスト（リアクティブ）
    const newTask=ref('');      // 入力された新しいタスク

    // タスクを追加する関数
    const addTask=()=>{
        if(newTask.value.trim() !==''){
            tasks.value.push(newTask.value);
            newTask.value='';
        }
    };
    return{tasks,newTask,addTask};
})
