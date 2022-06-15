<template>
    <v-navigation-drawer style="width:100%; height:100%; overflow:hidden;">
        <v-toolbar color="green" dark>
            <v-toolbar-title>Your Lists</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>list</v-icon>
        </v-toolbar>

        <v-list v-if="!isOpen">
            <v-list-item @click.prevent="openNewListForm()">
                <v-list-item-content>
                    <v-list-item-title><strong>Create a New List</strong></v-list-item-title>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon color="black">add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-list-item v-if="openNewListFormValue">
            <NewList/>
        </v-list-item>

        <v-divider></v-divider>

        <v-list style="padding-top:0px; height: calc(100% - 129px); overflow: auto;">
            <v-list-item 
                v-for="(list,key) in LISTS" 
                v-bind:key="key"
                :to="{name: 'MyTasks', params: {id: list.id, name:list.name, tasks:list.tasks}}"
                @click="makeTasksVisible()"
            >
                <v-list-item-content>
                    <v-list-item-title>{{list.name}}</v-list-item-title>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-badge color="#d7dbe0" style="margin-top:10px;">
                        <span slot="badge" style="color:black;">{{TASKS_COUNT(list.id)}}</span>
                    </v-badge>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script>
    import { mapGetters } from 'vuex';
    import NewList from "./NewList"

    export default {
        name: 'MyLists',
        components: {NewList},
        data: () => ({}),
        methods: {
            openNewListForm() {
                this.$store.commit("SET_NEW_LIST_FORM", true);
            },
            makeTasksVisible() {
                this.$store.commit("SET_TASKS_VISIBILITY", true);
            },
            TASKS_COUNT(index) {
                return this.$store.getters.TASKS_COUNT(index);
            }
        },
        computed: {
            ...mapGetters(['LISTS']),
            openNewListFormValue: {
                get () {
                    return this.$store.getters.NEW_LIST_FORM;
                },
            },
            isOpen () {
                return this.$store.getters.NEW_LIST_FORM;
            }
        },
        // mounted () {
        //     this.$store.dispatch("GET_LISTS");
        // }
    }
</script>