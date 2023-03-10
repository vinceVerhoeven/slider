import classNames from 'classnames';
import React from 'react';
import './Button.scss';

interface Props {
    onClick: () => void;
    isHidden: boolean;
}

export const NextButton: React.FC<Props> = ({ onClick, isHidden }) => {
    return (
        <button
            aria-label="Next slide"
            type="button"
            onClick={onClick}
            aria-hidden={isHidden}
            className={classNames([
                'slider__button',
                'slider__button--next',
                { 'slider__button--hidden': isHidden },
            ])}
        >
            <svg fill="#554c44" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256">
                <path d="M96,216a8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4L164.7,128,90.3,53.7a8.1,8.1,0,0,1,11.4-11.4l80,80a8.1,8.1,0,0,1,0,11.4l-80,80A8.5,8.5,0,0,1,96,216Z"/>
            </svg>
        </button>
    );
};
