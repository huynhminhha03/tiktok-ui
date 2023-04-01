import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

import { UserGroupIcon, HomeIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';
import Button from '~/components/Button';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Sidebar() {
    const MENU_ITEMS = [
        {
            icon: <HomeIcon />,
            activeIcon: <HomeActiveIcon />,
            title: 'For You',
            to: routesConfig.home,
        },
        {
            icon: <UserGroupIcon />,
            activeIcon: <UserGroupActiveIcon />,
            title: 'Following',
            to: routesConfig.following,
        },
        {
            icon: <LiveIcon />,
            activeIcon: <LiveActiveIcon />,
            title: 'LIVE',
            to: routesConfig.live,
        },
    ];

    const renderItem = () => {
        return MENU_ITEMS.map((item, index) => {
            return (
                <Button
                    className={cx('nav-item')}
                    key={index}
                    leftIcon={item.icon}
                    to={item.to}
                    children={item.title}
                />
            );
        });
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU_ITEMS.map((item, index) => {
                    return (
                        // <Button
                        //     className={cx('nav-item')}
                        //     key={index}
                        //     leftIcon={item.icon}
                        //     to={item.to}
                        //     children={item.title}
                        // />
                        <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} activeIcon={item.activeIcon}/>
                    );
                })}
            </Menu>
            <div className={cx('login')}>
                <p className={cx('login-tip')}>Log in to follow creators, like videos, and view comments.</p>
                <Button outline large className={cx('login-btn')}>
                    Login
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
