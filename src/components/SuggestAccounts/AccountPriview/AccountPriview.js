import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountPriview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPriview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={'/@phuvilla'} className={cx('link')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/269914322_1594144824251293_8665849558725026566_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=otmyCFb7TVgAX83VXuH&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCC8Hj8aMAX3BHPFNi-t7oIrCFb68IkuTVxex_wUFtP-A&oe=64352057"
                        alt="hmh"
                    />
                </Link>
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <Link to={'/@phuvilla'}>
                    <span className={cx('nickname')}>
                        <strong>phuvilla</strong>
                        <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                    </span>
                </Link>
                <Link to={'/@phuvilla'} className={cx('name')}>
                    <span>Nguyễn Văn Phú</span>
                </Link>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Followers</span>

                <strong className={cx('value')}>80.2M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPriview;
