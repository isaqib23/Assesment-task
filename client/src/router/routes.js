import index from '../components/theme/index';
import HomePage from "../components/theme/views/dashboard";

export default [
    {
        name: 'dashboard',
        path: '/',
        component: index,
        children: [
            {
                name: 'Home',
                path: '',
                component: HomePage
            }
        ]
    }
]
