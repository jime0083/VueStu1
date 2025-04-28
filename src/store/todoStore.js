import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore=defineStore('todo',()=>{
    const tasks=ref([]);        // タスクリスト（リアクティブ）
    const newTask=ref('');      // 入力された新しいタスク

    // タスクを追加する関数
    const addTask=()=>{
        if(newTask.value.trim() !==''){
            // タスクをオブジェクト形式で追加
            tasks.value.push({text:newTask.value, completed:false});
            newTask.value='';
        }
    };

    //追加:タスクを削除する関数
    const removeTask=(index)=>{
        tasks.value.splice(index,1);
    };

    // タスクの完了状態を切り替える
    const toggleTask=(index)=>{
        tasks.value[index].completed=!tasks.value[index].completed;
    };

    return{tasks,newTask,addTask,removeTask,toggleTask};
});
