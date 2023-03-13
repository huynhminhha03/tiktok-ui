import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7648e3177e0dd1c9384eb8274618045d~c5_300x300.webp?x-expires=1678885200&x-signature=awq8lG3lEvMJn6BzjvZMc2xr1cY%3D"
                alt="moicestmike2"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>minha2003</span>
                    <FontAwesomeIcon className={cx('user-checked')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Huynh Minh Ha</p>
            </div>
        </div>
    );
}

export default AccountItem;
