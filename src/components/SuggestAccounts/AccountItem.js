import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './SuggestAccounts.module.scss';
import AccountPriview from './AccountPriview';
import images from '~/assets/images';
import Image from '../Image/Image';

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
                    <Image
                        className={cx('avatar')}
                        src={images.avatar}
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
