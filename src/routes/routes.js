import { HeaderOnly } from '~/layouts';
import config from '~/config';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.foryou, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
