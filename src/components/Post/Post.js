import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/269914322_1594144824251293_8665849558725026566_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9G8hE6T8rpUAX8jBK0a&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDmjMDFuPK7UbxY2bfYk9BWToG9n0J1DdgEz0yLhtrnDQ&oe=64873E55"
                alt="HMH"
            />
            <div className={cx('body')}>
                <div className={cx('main-text')}>
                    <div className={cx('author-wrapper')}>
                        <div className={cx('author')}>
                            <p className={cx('nickname')}>
                                <strong>nguyenvanphu</strong>
                                <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>Nguyen Van Phu</p>
                        </div>
                        <div className={cx('text')}>
                            <span className={cx('span-text')}>THIs IS 4K ITACHI WALLPAPER </span>
                            <strong className={cx('strong-text')}>#tenshosq</strong>
                            <strong className={cx('strong-text')}>#anime</strong>
                            <strong className={cx('strong-text')}>#animeedit</strong>
                            <strong className={cx('strong-text')}>#animetittok</strong>
                            <strong className={cx('strong-text')}>#itachi</strong>
                        </div>
                    </div>
                    <button className={cx('follow-btn')}>Follow</button>
                </div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('video-container')}>
                        <Image
                            className={cx('external-image')}
                            src="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8d1f933115514abbab4e3ce6a4d2b836_1654647988~tplv-tiktokx-360p.jpeg?x-expires=1686409200&x-signature=cjrEzKKpolxu7bGMv5KLTzF8CkM%3D&s=AWEME_DETAIL&se=false&sh=&sc=feed_cover&l=20230609153618064434159530602358F1"
                            alt="itachi"
                        />
                    </div>
                    <div className={cx('icon-container')}>
                        <button className={cx('icon-wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </span>
                            <strong className={cx('value')}>84.8K</strong>
                        </button>
                        <button className={cx('icon-wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                            </span>
                            <strong className={cx('value')}>84.8K</strong>
                        </button>
                        <button className={cx('icon-wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faBookmark} size="lg" />
                            </span>
                            <strong className={cx('value')}>84.8K</strong>
                        </button>
                        <button className={cx('icon-wrapper')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faShare} size="lg" />
                            </span>
                            <strong className={cx('value')}>3000</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
