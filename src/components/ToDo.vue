<template>
    <v-container fluid fill-height pa-0>
        <v-layout>
            <v-flex lg3 elevation-5 mt-3 ml-5 mr-2 mb-5>
                <MyLists/>
            </v-flex>

            <v-flex lg9 elevation-5 mt-3 mr-5 ml-3 mb-5>
                <MyTasks/>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    import MyLists from "./MyLists"
    import MyTasks from "./MyTasks"
    export default {
        name: 'ToDo',
        components: {
            MyLists,
            MyTasks,
        }
    }
</script>


<style lang="">
    
</style>