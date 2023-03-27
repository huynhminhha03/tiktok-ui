import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FollowingIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const MENU_ITEMS = [
        {
            icon: <HomeIcon />,
            title: 'For You',
            to: '/foryou',
        },
        {
            icon: <FollowingIcon />,
            title: 'Following',
            to: '/following',
        },
        {
            icon: <LiveIcon />,
            title: 'LIVE',
            to: '/live',
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
            <nav className={cx('nav')}>
                <div className={cx('nav-list')}>{renderItem()}</div>
            </nav>
            <div className={cx('login')}>
                <p className={cx('login-tip')}>Log in to follow creators, like videos, and view comments.</p>
                <Button outline large className={cx('login-btn')}>Login</Button>
            </div>
        </aside>
    );
}

export default Sidebar;
