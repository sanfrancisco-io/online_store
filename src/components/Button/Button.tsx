import { useEffect, useState } from 'react';
import '../../styles/button_styles.scss';
import checkMark from '../../assets/home/feather_check.svg';

type Props = {
    type: string;
    title: string;
    cb?: (
        setLoader: (loading: boolean) => void,
        setError: (error: boolean) => void,
        setSuccess: (success: boolean) => void
    ) => void;
};

const buttonConfig = ['normal', 'inCart'];

const Button = ({ type = 'normal', title, cb }: Props) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [buttonTitle, setButtonTitle] = useState(title);
    const [buttonType, setButtonType] = useState(type);

    useEffect(() => {
        if (success && buttonTitle === 'Купить') {
            setButtonType('inCart');
            setButtonTitle('В корзине');
        }
        if (buttonTitle === 'В корзине') {
            setButtonType('normal');
            setButtonTitle('Купить');
        }
    }, [success]);

    return (
        <button
            onClick={() => cb && cb(setLoader, setError, setSuccess)}
            className={`${buttonConfig[buttonConfig.indexOf(buttonType)]} ${
                loader ? 'buttonload' : ''
            } ${success ? 'success' : ''} ${error ? 'error' : ''}`}
            disabled={loader}
        >
            {buttonType === 'inCart' && !loader && (
                <img src={checkMark} alt='checkmark' />
            )}

            {loader ? (
                <i className='fa fa-circle-o-notch fa-spin' />
            ) : (
                buttonTitle
            )}
        </button>
    );
};

export default Button;
