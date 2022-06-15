<template>
    <v-list-item>
        <v-list-item-action>
            <v-checkbox color="fff" 
                @change="onCheckBoxClicked($event)" 
                :input-value="task.status">
            </v-checkbox>
        </v-list-item-action>

        <v-list-item-content :class="{'striked': task.status}">
            <v-list-item-title>{{task.title}}</v-list-item-title>
        </v-list-item-content>

    </v-list-item>
</template>


<script>
    export default {
        name: 'MyTask',
        props:{
            task: Object,
        },
        methods:{
            onCheckBoxClicked(event){
                this.$emit("input", event);
            }
        }
    }
    
</script>


<style lang="">

</style>