import Vue from 'vue';
import VueRouter from 'vue-router';
import ErrorMsg from '../components/ErrorMsg.vue';
import Dashboard from '../Dashboard.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '*',
            component: ErrorMsg
        },
    ]
})

export default router;