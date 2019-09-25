<template>
    <div>
    Current User: {{user}}
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {
        name:"UserBar",
        computed: {
    ...mapGetters(["user"])
  },
    }
</script>
