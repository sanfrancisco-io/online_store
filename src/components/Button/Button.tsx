import { useState } from 'react';
import '../../styles/button_styles.scss';
import checkMark from '../../assets/home/feather_check.svg';

type Props = {
    type?: string;
    title?: string;
    cb?: (
        setLoader: (loading: boolean) => void,
        setError: (error: boolean) => void,
        setSuccess: (success: boolean) => void,
        id?: number
    ) => void;
    id?: number;
};

const buttonConfig = ['normal', 'inCart'];

const Button = ({ id, type = 'normal', title, cb }: Props) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <button
            onClick={() => cb && cb(setLoader, setError, setSuccess, id)}
            className={`${buttonConfig[buttonConfig.indexOf(type)]} ${
                loader ? 'buttonload' : ''
            } ${success ? 'success' : ''} ${error ? 'error' : ''}`}
            disabled={loader}
        >
            {type === 'inCart' && !loader && (
                <img src={checkMark} alt='checkmark' />
            )}

            {loader ? <i className='fa fa-circle-o-notch fa-spin' /> : title}
        </button>
    );
};

export default Button;
