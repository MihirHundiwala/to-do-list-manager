<template>
    <v-container fluid fill-height>
        <v-layout style="max-height:90vh; height:100%" justify-center>
            <transition name="lists_transition">
                <v-flex lg3 elevation-5 ml-5 mr-2>
                    <MyLists/>
                </v-flex>
            </transition>
            <transition name="tasks_transition">
                <v-flex lg9 elevation-5 mr-5 ml-3 v-if="tasksVisibility" animation>
                    <router-view name="MyTasks" :key="$route.fullPath"></router-view>
                </v-flex>
            </transition>
        </v-layout>
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