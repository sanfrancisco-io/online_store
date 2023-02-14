import Button from '../Button/Button';

type Props = {
    title: string;
    image: string;
    price: number;
    discount: number;
    hasPicture: boolean;
};

const HomePictureItem = ({
    title,
    image,
    price,
    discount,
    hasPicture,
}: Props) => {
    const totalPrice = price - discount;

    const fetchSomeData = async (
        setLoading: (loading: boolean) => void,
        setError: (error: boolean) => void,
        setSuccess: (success: any) => void
    ) => {
        try {
            setLoading(true);
            await fetch('https://jsonplaceholder.typicode.com/posts/1');
            setSuccess((prev: any) => !prev);
            setLoading(false);
        } catch (e) {
            setError(true);
        }
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString().split(',').join(' ');
    };

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
                            title='Купить'
                            type='normal'
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
