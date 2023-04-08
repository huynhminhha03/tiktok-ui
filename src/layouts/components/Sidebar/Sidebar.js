import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

import { UserGroupIcon, HomeIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';
import SuggestAccounts from '~/components/SuggestAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    
    const MENU_ITEMS = [
        {
            icon: <HomeIcon />,
            activeIcon: <HomeActiveIcon />,
            title: 'For You',
            to: config.routes.home,
        },
        {
            icon: <UserGroupIcon />,
            activeIcon: <UserGroupActiveIcon />,
            title: 'Following',
            to: config.routes.following,
        },
        {
            icon: <LiveIcon />,
            activeIcon: <LiveActiveIcon />,
            title: 'LIVE',
            to: config.routes.live,
        },
    ];

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU_ITEMS.map((item, index) => {
                    return (
                        <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} activeIcon={item.activeIcon}/>
                    );
                })}
            </Menu>
           <SuggestAccounts label='Suggested accounts' seeMore='See all'/>
           {/* <SuggestAccounts label='Following accounts' seeMore='See more'/> */}

        </aside>
    );
}

export default Sidebar;
