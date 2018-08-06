import Vue from 'vue';
import VueRouter from 'vue-router';
import views from '../views';

function init(){
    Vue.use(VueRouter);
    return new VueRouter({
        history: true,
        routes: [
            {
                path: '/',
                name: 'Dashboard',
                component: views.Dashboard,
            },
            {
                path: '/Search',
                name: 'Search',
                component: views.Search,
            },
            {
                path: '/family/:familyId',
                name: 'Family',
                component: views.Family,
            }
        ]
    });
}

export default init;
