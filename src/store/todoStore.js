import { defineStore } from "pinia";
import { ref,computed,watch } from "vue";

export const useTodoStore=defineStore('todo',()=>{
    const tasks=ref([]);        // タスクリスト（リアクティブ）
    const newTask=ref('');      // 入力された新しいタスク
    const searchKeyword=ref('');
    const filter=ref('all');



    // ローカルストレージから初期値読み込み
    const loadTasksFromStorage=()=>{
        const saved=localStorage.getItem('my-tasks');
        if(saved){
            tasks.value=JSON.parse(saved);
        }
    };

    // tasksが変化したらローカルストレージに保存
    watch(tasks,(newVal)=>{
        localStorage.setItem('my-tasks',JSON.stringify(newVal));
    },{deep:true});



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

    // 絞り込み済みタスクリスト
    const filteredTasks=computed(()=>{
        return tasks.value
        .filter((task)=>
        // 検索機能
            task.text.toLowerCase().includes(searchKeyword.value.toLowerCase())
        )
        // 完了か未完了か
        .filter((task)=>{
            if(filter.value==='completed') return task.completed;
            if(filter.value==='active') return !task.completed;
            return true;
        });
    });

    return{
        tasks,
        newTask,
        searchKeyword,
        filteredTasks,
        filter,
        addTask,
        removeTask,
        toggleTask,
        loadTasksFromStorage,
    };
});
