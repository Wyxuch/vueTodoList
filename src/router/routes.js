import store from '../store';
import parseSlug from "../utils/parseSlug";

const lists = store.getters.getListNames.map(el => ({name: el, path: `/${parseSlug(el)}`, component: () => import('../views/List')}));

export default [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home')
    },
    ...lists
]