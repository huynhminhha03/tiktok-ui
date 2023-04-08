import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label, seeMore }) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            {/* <AccountItem />
            <AccountItem /> */}
            <p className={cx('see-more')}>{seeMore}</p>
        </div>
        );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    seeMore: PropTypes.string.isRequired,


}

export default SuggestAccounts;