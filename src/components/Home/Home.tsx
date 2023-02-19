import '../../styles/home_style.scss';
import firstPic from '../../assets/home/firstPic.png';
import secondPic from '../../assets/home/secondPic.png';
import thirdPic from '../../assets/home/thirdPic.png';
import fourthPic from '../../assets/home/fourthPic.png';
import { buttonTitles, buttonTypes, IHomePicConfig } from '../../types';
import HomePictureCard from './HomePictureCard';
import { useState } from 'react';

type Props = { search: string };

const homePictureConfig: IHomePicConfig[] = [
    {
        image: firstPic,
        title: '«Рождение Венеры» Сандро Боттичелли',
        price: 2_000_000,
        discount: 1_000_000,
        hasPicture: true,
        id: 1,
        btnState: {
            btnType: buttonTypes.normal,
            btnTitle: buttonTitles.buy,
        },
    },

    {
        image: secondPic,
        title: '«Тайная вечеря»  Леонардо да Винчи',
        price: 3_000_000,
        discount: 0,
        id: 2,
        hasPicture: true,
        btnState: {
            btnType: buttonTypes.normal,
            btnTitle: buttonTitles.buy,
        },
    },
    {
        image: thirdPic,
        title: '«Сотворение Адама» Микеланджело',
        price: 6_000_000,
        discount: 1_000_000,
        hasPicture: true,
        id: 3,
        btnState: {
            btnType: buttonTypes.normal,
            btnTitle: buttonTitles.buy,
        },
    },
    {
        image: fourthPic,
        title: '«Урок анатомии»  Рембрандт',
        price: 2_000_000,
        discount: 1_000_000,
        id: 4,
        hasPicture: false,
        btnState: {},
    },
];

const homePictureConfigFromLocal: IHomePicConfig[] = JSON.parse(
    localStorage.getItem('pictures') || '[]'
);

const Home = ({ search }: Props) => {
    const [pictures, setPictures] = useState(() =>
        homePictureConfigFromLocal.length
            ? homePictureConfigFromLocal
            : homePictureConfig
    );

    return (
        <div className='home'>
            <div className='home_title'>Картины эпохи Возрождения</div>

            <div className='home_cards'>
                {pictures
                    .filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                        <HomePictureCard
                            key={item.id}
                            pictures={pictures}
                            setPictures={setPictures}
                            id={item.id}
                            buttonState={item.btnState}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            discount={item.discount}
                            hasPicture={item.hasPicture}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
