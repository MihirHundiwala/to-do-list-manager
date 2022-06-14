<template>
    <v-navigation-drawer style="width: 100%">
        <v-toolbar color="green" dark>
            <v-toolbar-title>Your Lists</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>list</v-icon>
        </v-toolbar>

        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>New List</v-list-item-title>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="(list,key) in lists" v-bind:key="key">
                <v-list-item-content>
                    <v-list-item-title>{{list.name}}</v-list-item-title>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-badge color="#d7dbe0">
                        <span slot="badge" style="color:black;">{{list.tasks}}</span>
                    </v-badge>
                </v-list-item-action>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>


<script>
    export default {
        name: 'MyLists',
        data: () => ({
            lists: [
                {
                    id:1,
                    name: "List Number 1",
                    tasks: 12,
                },
                {
                    id:2,
                    name: "List Number 2",
                    tasks: 9,
                },
                {
                    id:3,
                    name: "List Number 3",
                    tasks: 3,
                },
                {
                    id:4,
                    name: "List Number 4",
                    tasks: 10,
                }
            ]
        })
    }
</script>


<style lang="">
    
</style>