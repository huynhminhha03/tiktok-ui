import { HeaderOnly } from '~/components/Layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/foryou', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
