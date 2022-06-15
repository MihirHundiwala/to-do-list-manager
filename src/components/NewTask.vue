<template>
    <v-container style="padding:10px 0px 0px 0px;">
        <v-form ref="form" @submit.prevent="submit()">
            <v-text-field 
                @blur="closeForm()"
                append-icon="add"
                slot
                ref="input"
                v-model="title"
                placeholder="Enter Task Name"
                style="padding: 0px; margin: 0px;"
                :rules="[rules.required]"
            >
            </v-text-field>
        </v-form>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        title: "",
        rules: {
            required: value => !!value || "Cannot be Empty"
        }
    }),
    props: {
        listid: Number,
    },
    methods: {
        submit () {
            if(this.title.trim()=="" || this.title==null) return false;
            this.$store.dispatch("CREATE_TASK", {
                listid: this.listid,
                title: this.title,
            }).then(() => {
                this.$store.commit("SET_NEW_TASK_FORM", false);
                this.$store.commit("SET_NEW_TASK_FORM", true);
                this.title=""
            })
        },

        closeForm () {
            this.$store.commit("SET_NEW_TASK_FORM", false);
        }
    },
    mounted () {
        this.$refs.input.focus();
    }
}
</script>