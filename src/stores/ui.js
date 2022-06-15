export default {
    state: {
        newListForm: false,
        newTaskForm: false,
        tasksVisibility: false,
    },
    getters: {
        NEW_LIST_FORM: state => {
            return state.newListForm;
        },
        NEW_TASK_FORM: state => {
            return state.newTaskForm;
        },
        TASKS_VISIBILITY: state => {
            return state.tasksVisibility;
        }
    },
    mutations: {
        SET_NEW_LIST_FORM: (state, bool) => {
            state.newListForm = bool;
        },
        SET_NEW_TASK_FORM: (state, bool) => {
            state.newTaskForm = bool;
        },
        SET_TASKS_VISIBILITY: (state, bool) => {
            state.tasksVisibility = bool;
        }
    }
}