import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback : customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}
export default Image;

// function Image({ ...props }, ref) {
//     return (
//         <img ref={ref} {...props} />
//      );
// }

// export default forwardRef(Image);
