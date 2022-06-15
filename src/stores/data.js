import lists from "../../data/lists.json"

export default {
    state: {
        lists:lists,
        list_count: lists.length,
    },
    getters: {
        LISTS: state => {
            return state.lists;
        },
        TASKS_COUNT: state => index => {
            if (index) {
                return state.lists.find(list => list.id===index).tasks.length;
            }
        },
        LISTS_COUNT: state => { 
            return state.list_count;
        },
    },
    mutations: {
        ADD_LIST: (state, payload) => {
            state.lists.push(payload);
        },
        DELETE_LIST: (state, listId) => {
            const findIndex = state.lists.findIndex(list => list.id === listId)
            findIndex !== -1 && state.lists.splice(findIndex , 1)  
        },
        ADD_TASK: (state, payload) => {
            state.lists.find(list => list.id===parseInt(payload.listid)).tasks.push(payload.new_task);
        },
        DELETE_TASK: (state, data) => {
            const listIndex = state.lists.findIndex(list => list.id === data.listId)
            if(listIndex !== -1){
                const taskIndex=state.lists[listIndex].tasks.findIndex(task => task.id === data.taskId)
                console.log(taskIndex, data.taskId, typeof(data.taskId))
                taskIndex !== -1 && state.lists[listIndex].tasks.splice(taskIndex, 1)
            }
            console.log(state.lists)
        },
        UPDATE_LIST_COUNT: (state) => {
            state.list_count += 1;
        },
        TOGGLE_ALL_TASKS_STATUS: (state, data) => {
            let tasks = state.lists.find(list => list.id == data.listId).tasks
            tasks.forEach(task => {
                task.status = data.bool
            });
        }
    },
    actions: {
        CREATE_LIST: ({commit, getters}, data) => {
            let new_list = {
                id: getters.LISTS_COUNT + 1,
                name: data.title,
                tasks: [],
            }
            commit("ADD_LIST", new_list)
            commit("UPDATE_LIST_COUNT")
            console.log(new_list)
            return {data: new_list}
        },

        CREATE_TASK: ({commit, getters}, data) => {
            let listid = parseInt(data.listid);
            let new_task = {
                id: getters.TASKS_COUNT(listid)+1,
                title: data.title,
                status: false
            }
            commit("ADD_TASK", {listid, new_task})
            return {data: {new_task, listid}}
        },

        DELETE_LIST_ITEM: ({commit}, data) => {
            commit("DELETE_LIST", data.listId)
            return data.listId
        },

        DELETE_TASK_ITEM: ({commit}, data) => {
            commit("DELETE_TASK", {listId: data.listId, taskId: data.taskId})
            return {listId: data.listId, taskId: data.taskId}
        }
    }
}