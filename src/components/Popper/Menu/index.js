import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <Tippy
            visible
            delay={[0, 700]}
            interactive //Có thể tương tác với popover
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
