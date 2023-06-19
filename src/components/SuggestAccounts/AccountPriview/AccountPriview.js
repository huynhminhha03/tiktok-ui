import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountPriview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPriview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={'/@phuvilla'} className={cx('link')}>
                    <Image
                        className={cx('avatar')}
                        src={images.avatar}
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
