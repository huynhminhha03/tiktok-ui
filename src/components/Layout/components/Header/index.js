import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
    faCircleXmark,
    faSpinner,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import { Menu } from '~/components/Popper';
import { CoinIcon, DarkmodeIcon, FeelbackIcon, KeyboardIcon, LanguageIcon, LogoutIcon, MoreIcon, SearchIcon, SettingsCoin, TiktokLogo, UploadIcon, UserIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = className.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <LanguageIcon width='2.0rem' height='2.0rem'/>,
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
            icon: <FeelbackIcon width='2.0rem' height='2.0rem' />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <KeyboardIcon width='2.0rem' height='2.0rem'/>,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <DarkmodeIcon width='2.0rem' height='2.0rem'/>,
            title: 'Dark mode',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, []);

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
            icon: <UserIcon width='2.0rem' height='2.0rem'/>,
            title: 'View profile',
        },
        {
            icon: <CoinIcon width='2.0rem' height='2.0rem'/>,
            title: 'Get coins',
        },
        {
            icon: <SettingsCoin width='2.0rem' height='2.0rem'/>,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon width='2.0rem' height='2.0rem'/>,
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
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive //Có thể tương tác với popover
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <span className={cx('search-more')}>View all result for "{searchResult}"</span>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" spellCheck={false} placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon width='2.4rem' height='2.4rem'/>
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
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
                                src="https://p16-sdign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/946b2b862e73839ba07b3908aa973b83~c5_100x100.jpeg?x-expires=1679490000&x-signature=wQoWXzlvfrN4%2BzDY7sz4WozAY8A%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback='https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/10082a5622e51768e8ac49f11212409d~c5_100x100.jpeg?x-expires=1679634000&x-signature=lgyieYfZooUloKf%2FsHF%2Fl47Ec7A%3D'
                            />
                        ) : (
                            <button className={cx('more-icon')}>
                                <MoreIcon width='2.0rem' height='2.0rem'/>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
