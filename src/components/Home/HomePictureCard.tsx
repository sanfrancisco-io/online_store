import { useEffect } from 'react';
import {
    buttonTitles,
    buttonTypes,
    IBtnState,
    IHomePicConfig,
} from '../../types';
import Button from '../Button/Button';

type Props = {
    title: string;
    image: string;
    price: number;
    discount: number;
    hasPicture: boolean;
    setPictures: React.Dispatch<React.SetStateAction<IHomePicConfig[]>>;
    pictures: IHomePicConfig[];
    buttonState: IBtnState;
    id: number;
};

const HomePictureItem = ({
    title,
    image,
    price,
    discount,
    hasPicture,
    id,
    setPictures,
    buttonState,
    pictures,
}: Props) => {
    const totalPrice = price - discount;

    const fetchSomeData = async (
        setLoading: (loading: boolean) => void,
        setError: (error: boolean) => void,
        setSuccess: (success: any) => void,
        id?: number
    ) => {
        try {
            setLoading(true);
            await fetch('https://jsonplaceholder.typicode.com/posts/1');
            setSuccess((prev: any) => !prev);
            setLoading(false);
            setPictures((prev) =>
                prev.map((item) => {
                    if (id === item.id) {
                        return {
                            ...item,
                            btnState: {
                                ...item.btnState,
                                btnType:
                                    item.btnState.btnType === buttonTypes.normal
                                        ? buttonTypes.inCart
                                        : buttonTypes.normal,
                                btnTitle:
                                    item.btnState.btnTitle === buttonTitles.buy
                                        ? buttonTitles.inCart
                                        : buttonTitles.buy,
                            },
                        };
                    } else {
                        return item;
                    }
                })
            );
        } catch (e) {
            setError(true);
        }
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString().split(',').join(' ');
    };

    useEffect(() => {
        localStorage.setItem('pictures', JSON.stringify(pictures));
    }, [pictures]);

    return (
        <div className={hasPicture ? 'card' : 'sold_card'}>
            <img src={image} alt={title} />

            <div className='card__actions'>
                <div className='card__actions_title'>
                    <span>{title}</span>
                </div>

                {hasPicture ? (
                    <div className='card__actions_footer'>
                        <div className='card__actions_price'>
                            <div>
                                {discount > 0 && (
                                    <span className='card__actions_discount'>
                                        {formatPrice(price)} $
                                    </span>
                                )}
                            </div>
                            <span>{formatPrice(totalPrice)} $</span>
                        </div>

                        <Button
                            cb={fetchSomeData}
                            id={id}
                            title={buttonState.btnTitle}
                            type={buttonState.btnType}
                        />
                    </div>
                ) : (
                    <span className='sold'>Продана на аукционе</span>
                )}
            </div>
        </div>
    );
};

export default HomePictureItem;
