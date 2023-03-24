import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    
    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then((res) => res.json())
        .then((res) => {
            setSearchResult(res.data)
            setLoading(false)
        })

    }, [searchValue]);

    console.log(searchValue);
    const handleClick = () => {};

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setShowResult(true);
    }

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive //Có thể tương tác với popover
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => 
                            <AccountItem key={result.id} data={result}/>
                        )}
                        <span className={cx('search-more')}>View all result for "{searchValue}"</span>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    spellCheck={false}
                    placeholder="Search accounts and videos"
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (!loading) && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onClick={handleClick}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
