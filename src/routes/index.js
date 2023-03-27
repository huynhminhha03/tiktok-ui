import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.foryou, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
