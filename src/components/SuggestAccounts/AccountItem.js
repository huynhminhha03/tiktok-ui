import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './SuggestAccounts.module.scss';
import AccountPriview from './AccountPriview';

const cx = classNames.bind(styles);

const renderPriview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPriview />
            </PopperWrapper>
        </div>
    );
};

function AccountItem() {
    return (
        <div>
            <Tippy offset={[-16, -8]} interactive placement="bottom-start" delay={[700, 0]} render={renderPriview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/269914322_1594144824251293_8665849558725026566_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=otmyCFb7TVgAX83VXuH&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCC8Hj8aMAX3BHPFNi-t7oIrCFb68IkuTVxex_wUFtP-A&oe=64352057"
                        alt="HMH"
                    />
                    <div className={cx('info-item')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenvanphu</strong>
                            <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyen Van Phu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
