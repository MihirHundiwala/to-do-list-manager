import lists from "../../data/lists.json"

export default {
    state: {
        lists:lists,

    },
    getters: {
        LISTS: state => {
            return state.lists;
        },
        TASKS_COUNT: state => index => {
            if (index) {
                return state.lists.find(list => list.id===index).tasks.length;
            }
        }
    },
    mutations: {
        ADD_LIST: (state, payload) => {
            state.lists.unshift(payload);
        },
        ADD_TASK: (state, payload) => {
            state.lists.find(list => list.id===parseInt(payload.listid)).tasks.unshift(payload.new_task);
        }
    },
    actions: {
        CREATE_LIST: ({commit}, data) => {
            let new_list = {
                id: 11,
                name: data.title,
                tasks: [],
            }
            commit("ADD_LIST", new_list)
            return {data: new_list}
        },

        CREATE_TASK: ({commit}, data) => {
            let listid = parseInt(data.listid);
            let new_task = {
                // id: this.$store.getters.TASKS_COUNT(listid)+1,
                title: data.title,
                status: false
            }
            commit("ADD_TASK", {listid, new_task})
            return {data: {new_task, listid}}
        }
    }
}