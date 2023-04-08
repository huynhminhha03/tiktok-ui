import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <p className={cx('login-tip')}>Log in to follow creators, like videos, and view comments.</p>
            <Button outline large className={cx('login-btn')}>
                Login
            </Button>
        </div>
    );
}

export default Login;
