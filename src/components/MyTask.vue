<template>
    <v-list-item
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{'isHovered' : hover}"
    >
        <v-list-item-action>
            <v-checkbox color="black"
                @change="onCheckBoxClicked($event)" 
                :input-value="task.status">
            </v-checkbox>
        </v-list-item-action>

        <v-list-item-content :class="{'striked': task.status}">
            <v-list-item-title>{{task.title}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
            <v-list-item-title v-if="hover" >
                <v-icon color="#121212" @click="deleteTaskItem(listid, task.id)">cancel</v-icon>
            </v-list-item-title>
        </v-list-item-action>

    </v-list-item>
</template>


<script>
    export default {
        name: 'MyTask',
        data: ()=>({
            hover:false,
        }),
        props:{
            task: Object,
            listid: Number,
        },
        methods:{
            onCheckBoxClicked(event){
                this.$emit("input", event);
            },
            deleteTaskItem(listId, taskId){
                this.$store.dispatch("DELETE_TASK_ITEM", {
                    listId,
                    taskId
                }).then(()=>{
                    
                })
            }
        }
    }
    
</script>


<style lang="">

</style>