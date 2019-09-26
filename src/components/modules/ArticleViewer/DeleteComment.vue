<template>
         <v-btn 
         color="yellow"
         class=" darken-2 white--text"
         small
            @click="handleDelete"
            :disabled='author !== user'
         > Delete </v-btn>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'DeleteComment',
    props:['author', 'id'],
    computed:{
        ...mapGetters([
            'user'
        ])
    },
    methods:{
        handleDelete(){
            this.$store.dispatch('deleteComment', this.id)
        }
    }
}
</script>