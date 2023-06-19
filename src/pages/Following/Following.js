import classNames from 'classnames/bind';
import styles from './Following.module.scss'
import Post from '~/components/Post/Post';

const cx = classNames.bind(styles)

function Following() {
    return ( 
        <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>


    </div>
     );
}

export default Following;