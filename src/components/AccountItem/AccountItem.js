import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import style from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(style);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('user-checked')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;
