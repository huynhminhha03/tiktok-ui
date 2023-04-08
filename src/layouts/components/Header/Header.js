import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Search from '~/layouts/components/Search';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Menu } from '~/components/Popper';
import config from '~/config';
import {
    CoinIcon,
    DarkmodeIcon,
    FeelbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessagesIcon,
    MoreIcon,
    SettingsCoin,
    TiktokLogo,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = className.bind(styles);

function Header({ large }) {
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <LanguageIcon />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'Language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'Language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FeelbackIcon />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <KeyboardIcon />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <DarkmodeIcon />,
            title: 'Dark mode',
        },
    ];

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change to language
                break;
            default:
                break;
        }
    };

    const userItem = [
        {
            icon: <UserIcon />,
            title: 'View profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
        },
        {
            icon: <SettingsCoin />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div
                className={cx('inner',{
                    large,
                })}
            >
                <Link to={config.routes.home} className={cx('logo')}>
                    <TiktokLogo />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 150]} content="Upload video" placement="bottom">
                                <Button text to={config.routes.upload} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to={config.routes.upload} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userItem : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/269914322_1594144824251293_8665849558725026566_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=otmyCFb7TVgAX83VXuH&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCC8Hj8aMAX3BHPFNi-t7oIrCFb68IkuTVxex_wUFtP-A&oe=64352057"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-icon')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
