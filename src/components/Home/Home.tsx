import '../../styles/home_style.scss';
import firstPic from '../../assets/home/firstPic.png';
import secondPic from '../../assets/home/secondPic.png';
import thirdPic from '../../assets/home/thirdPic.png';
import fourthPic from '../../assets/home/fourthPic.png';
import { IHomePicConfig } from '../../types';
import HomePictureCard from './HomePictureCard';

type Props = { search: string };

const homePictureConfig: IHomePicConfig[] = [
    {
        image: firstPic,
        title: '«Рождение Венеры» Сандро Боттичелли',
        price: 2_000_000,
        discount: 1_000_000,
        hasPicture: true,
    },

    {
        image: secondPic,
        title: '«Тайная вечеря»  Леонардо да Винчи',
        price: 3_000_000,
        discount: 0,
        hasPicture: true,
    },
    {
        image: thirdPic,
        title: '«Сотворение Адама» Микеланджело',
        price: 6_000_000,
        discount: 1_000_000,
        hasPicture: true,
    },
    {
        image: fourthPic,
        title: '«Урок анатомии»  Рембрандт',
        price: 2_000_000,
        discount: 1_000_000,
        hasPicture: false,
    },
];

const Home = ({ search }: Props) => {
    return (
        <div className='home'>
            <div className='home_title'>Картины эпохи Возрождения</div>

            <div className='home_cards'>
                {homePictureConfig
                    .filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item, index) => (
                        <HomePictureCard
                            key={index}
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
