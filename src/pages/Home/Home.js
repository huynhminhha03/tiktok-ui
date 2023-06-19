import classNames from 'classnames/bind';
import styles from './Home.module.scss'
import Post from '~/components/Post/Post';

const cx = classNames.bind(styles)

function Home() {
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

export default Home;