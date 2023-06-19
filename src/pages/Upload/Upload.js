import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('upload')}>
            <UploadIcon />
            <span className={cx('text-main')}>Select video to upload</span>
            <span className={cx('text-sub')}>Or drag and drop a file</span>
            <span className={cx('text-sub')}>Long videos can be split into multiple parts to get more exposure</span>
            <div className={cx('text-video-info')}>
                <span>MP4 or WebM</span>
                <span>720x1280 resolution or higher</span>
                <span>Up to 30 minutes</span>
                <span>Less than 2 GB</span>
            </div>
            <button className={cx('select-btn')}>Select file</button>
        </div>
    );
}

export default Upload;
