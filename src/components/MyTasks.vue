<template>
    <v-card style="width:100%; height:100%; overflow:hidden;">
        <v-toolbar color="green" dark>
            <v-toolbar-title>Tasks in {{listdata.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>task</v-icon>
        </v-toolbar>

        <v-list v-if="!isOpen">
            <v-list-item @click.prevent="openNewTaskForm()">
                <v-list-item-content>
                    <v-list-item-title><strong>Add a New Task</strong></v-list-item-title>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon color="black">add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-list-item v-if="openNewTaskFormValue">
            <NewTask :listid=listdata.id />
        </v-list-item>

        <v-divider></v-divider>

        <v-list style="padding-top:0px; height: calc(100% - 128px); overflow-y: auto;">
            <template>
                <MyTask v-for="(task,key) in listdata.tasks" 
                        v-bind:key="key" 
                        :task="task"
                        v-model="task.status" />
            </template>
        </v-list>
    </v-card>
</template>


<script>
    import MyTask from "./MyTask"
    import NewTask from "./NewTask"
    export default {
        name: 'MyTasks',
        components: { MyTask, NewTask },
        data: () => ({}),
        methods: {
            openNewTaskForm() {
                this.$store.commit("SET_NEW_TASK_FORM", true);
            },
        },
        computed: {
            listdata () {
                return {
                    id: parseInt(this.$route.params.id),
                    name: this.$route.params.name,
                    tasks: this.$route.params.tasks
                };
            },
            openNewTaskFormValue: {
                get () {
                    return this.$store.getters.NEW_TASK_FORM;
                },
                set (value) {
                    this.$store.commit("SET_NEW_TASK_FORM", value);
                },
            },
            isOpen () {
                return this.$store.getters.NEW_TASK_FORM;
            }
        },
    }
</script>