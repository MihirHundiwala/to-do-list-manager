<template>
    <v-list-item 
        :to="{name: 'MyTasks', params: {id:list.id, list}}"
        @click="makeTasksVisible()"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <v-list-item-content>
            <v-list-item-title>{{list.name}}</v-list-item-title>
        </v-list-item-content>
        
        <v-list-item-action>
            <v-badge color="#d7dbe0" style="margin-top:15px;" v-if="!hover">
                <span slot="badge" style="color:black;">{{TASKS_COUNT(list.id)}}</span>
            </v-badge>

            <v-list-item-title v-if="hover" @click="deleteListItem(list.id)">
                <v-icon color="black">cancel</v-icon>
            </v-list-item-title>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    name: "MyList",
    props:{
        list: Object,
    },
    data: () => ({
        hover: false,
    }),
    methods: {
        makeTasksVisible() {
            this.$store.commit("SET_TASKS_VISIBILITY", true);
        },
        TASKS_COUNT(index) {
            return this.$store.getters.TASKS_COUNT(index);
        },
        deleteListItem(listId){
            this.$store.dispatch("DELETE_LIST_ITEM", {
                listId,
            }).then(()=>{
                
            })
        }
    },
}
</script>
