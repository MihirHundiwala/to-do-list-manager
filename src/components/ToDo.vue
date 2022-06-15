<template>
    <v-container fluid fill-height pa-0 align-content-space-between style="height:100vh;">
        <v-app-bar style="background: linear-gradient(90deg, rgba(105,21,129,1) 6%, rgba(113,20,139,1) 32%, rgba(54,78,167,1) 65%, rgba(36,174,201,1) 100%); 
                          width: 100%;" dark>
            <v-spacer/>
                <v-app-bar-title>
                    <big>
                        To Do List App
                    </big>
                </v-app-bar-title>
            <v-spacer/>
        </v-app-bar>
        <v-layout style="max-height:82vh; height:100%" justify-center>
            <transition name="lists_transition">
                <v-flex lg3 elevation-10 ml-5 mr-2 outlined>
                    <MyLists/>
                </v-flex>
            </transition>
            <transition name="tasks_transition">
                <v-flex lg9 elevation-10 ml-3 mr-5 v-if="tasksVisibility" animation>
                    <router-view name="MyTasks" :key="$route.fullPath"></router-view>
                </v-flex>
            </transition>
        </v-layout>
        <v-footer style="background: linear-gradient(90deg, rgba(36,174,201,1) 0%, rgba(54,78,167,1) 35%, rgba(113,20,139,1) 68%, rgba(105,21,129,1) 94%);
                         width: 100%; height:20px; padding:0px; margin:0px; color:white;">
            <v-spacer/>
                <small>
                    Copyright @2022, Mihir Hundiwala. All Rights Reserved.
                </small>
            <v-spacer/>
        </v-footer>
    </v-container>
</template>


<script>
    import MyLists from "./MyLists"
    export default {
        name: 'ToDo',
        components: {
            MyLists,
        },
        computed: {
            tasksVisibility: {
                get () {
                    return this.$store.getters.TASKS_VISIBILITY;
                },
            },
        }
    }
</script>


<style lang="">
    
</style>