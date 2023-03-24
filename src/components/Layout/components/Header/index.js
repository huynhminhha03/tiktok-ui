import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Search from '~/components/Layout/components/Search'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Menu } from '~/components/Popper';
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
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = className.bind(styles);

function Header() {
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
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <TiktokLogo />
                </div>

                <Search />


                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 150]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
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
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userItem : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/946b2b862e73839ba07b3908aa973b83~c5_100x100.jpeg?x-expires=1679490000&x-signature=wQoWXzlvfrN4%2BzDY7sz4WozAY8A%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/269914322_1594144824251293_8665849558725026566_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=CY08FhupOksAX_0Hr4r&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAIZu3t00BebydmTGEqBgtCtaNRGb1IxiZ7QBw5X6pHRA&oe=642159D7'
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
