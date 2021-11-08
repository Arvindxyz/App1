import Router from 'vue-router';
import store from '@/stores';

// @ -> src/ folder
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Forms from '@/components/Forms';
import Responses from '@/components/Responses';
//import Results from '@/components/Results';
import CreateForm from '@/components/CreateForm';
import NoPage from '@/components/NoPage';
 
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/',
            component: Login,
        },
        {
            name:'signup',
            path:'/signup',
            component: Signup
       },
       { 
            name: 'forms',
            path: '/forms',
            component: Forms,
            props: true,
            children:[           
                {
                    name: 'createform',
                    path: '/createform',
                    component: CreateForm,
                }, 
            ]
       },
        {
            name: 'responses',
            path: '/responses',
            component: Responses,
            props: true
        },
       /* {
            name: 'results',
            path: '/results',
            component: Results,
            props: true
        },
        */
       {
           name: '*',
           path: '/*',
           component: NoPage
       },
    ]
});

//Global auth guard
router.beforeEach(( to, from, next ) => {
    if( ( (to.name !== 'login')&&(to.name !=='signup')) && (!store.getters.isAuthenticated )) {
        alert('First login than you can go to any page');
        return next({
            name: 'login'
        });
    }

    next();
});

export default router;
