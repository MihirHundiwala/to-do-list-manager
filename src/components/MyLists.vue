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
            <MyList v-for="(list,key) in LISTS"
                    v-bind:key="key" 
                    :list=list />
        </v-list>
    </v-navigation-drawer>
</template>


<script>
    import { mapGetters } from 'vuex';
    import NewList from "./NewList"
    import MyList from "./MyList"

    export default {
        name: 'MyLists',
        components: {NewList, MyList},
        data: () => ({
        }),
        methods: {
            openNewListForm() {
                this.$store.commit("SET_NEW_LIST_FORM", true);
            },
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
    }
</script>