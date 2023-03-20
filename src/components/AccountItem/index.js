import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/323283294_705210387915402_225506109373858061_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xycJvscX-7gAX-NIggQ&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDXWk5EtiV8lip9gf0vWYgbDoaCDfWLliraFPTfdtqJYg&oe=6419573A"
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
