import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { ArrowDownIcon, LogoIcon, TiktokTitle } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <LogoIcon />
                    <TiktokTitle />
                </div>
                <div className={cx('column')}>
                    <h4 className={cx('title')}>Company</h4>
                    <span>
                        <h5 className={cx('item-sub-column')}>About TikTok</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Newsroom</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Contact</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Careers</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>ByteDance</h5>
                    </span>
                </div>
                <div className={cx('column')}>
                    <h4 className={cx('title')}>Programs</h4>
                    <span>
                        <h5 className={cx('item-sub-column')}>TikTok for Good</h5> 
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Advertise</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Developers</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>TikTok Rewards</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>TikTok Browse</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>TikTok Embeds</h5>
                    </span>
                </div>
                <div className={cx('column')}>
                    <h4 className={cx('title')}>Support</h4>
                    <span>
                        <h5 className={cx('item-sub-column')}>Help Center</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Safety Center</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Creator Portal</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Community Guidelines</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Transparency</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Accessibility</h5>
                    </span>
                </div>
                <div className={cx('column')}>
                    <h4 className={cx('title')}>Legal</h4>
                    <span>
                        <h5 className={cx('item-sub-column')}>Terms of Use</h5>
                    </span>
                    <span>
                        <h5 className={cx('item-sub-column')}>Privacy Policy</h5>
                    </span>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('select-language')}>
                    <p className={cx('language')}>English</p>
                    <ArrowDownIcon />
                    <select className={cx('form')}>
                        <option value="en">English</option>
                        <option value="vi"> Tiếng Việt </option>
                    </select>
                </div>
                <div className={cx('copyright')}>© 2023 TikTok</div>
            </div>
        </div>
    );
}

export default Footer;
