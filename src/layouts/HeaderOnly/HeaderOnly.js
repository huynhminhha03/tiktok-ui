import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <div className={cx('container')}>
                <Header large />
                <div className={cx('layout')}>
                    <div className={cx('inner')}>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HeaderOnly;


