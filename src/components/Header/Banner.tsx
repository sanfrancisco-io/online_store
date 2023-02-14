import '../../styles/header_style.scss';

import logo from '../../assets/header/logo-museum.svg';
import phone from '../../assets/phone.svg';
import adress from '../../assets/adress.svg';
import { IHeaderTitleConfig } from '../../types';
import Button from '../Button/Button';

type Props = {
    search?: string;
    setSearch?: (search: string) => void;
    bgColor?: string;
    type?: string;
};

const headerTitleConfig: IHeaderTitleConfig[] = [
    {
        title: 'Каталог',
        route: 'catalog',
        id: 1,
    },
    {
        title: 'Доставка',
        route: 'delivery',
        id: 2,
    },
    {
        title: 'Оплата',
        route: 'payment',
        id: 3,
    },
    {
        title: 'Контакты',
        route: 'contacts',
        id: 4,
    },
    {
        title: 'О галерее',
        route: 'gallery',
        id: 5,
    },
];

const Header = ({
    search,
    setSearch,
    bgColor = '',
    type = 'header',
}: Props) => {
    return (
        <div
            style={{
                backgroundColor: bgColor,
            }}
            className={`${type === 'header' ? 'header' : 'footer'}`}
        >
            <div className='header__left'>
                <a href='/'>
                    <img className='header__left_logo' src={logo} alt='logo' />
                </a>

                <div className='header__left_routes'>
                    {headerTitleConfig.map((item) => (
                        <a key={item.id} href={item.route}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
            {type === 'header' ? (
                <div className='header__right'>
                    <input
                        value={search}
                        onChange={(e) => setSearch && setSearch(e.target.value)}
                        placeholder='Поиск по названию картинки'
                        className='header__right_input'
                    />

                    <Button title='Найти' type='normal' />
                </div>
            ) : (
                <div className='header__right'>
                    <div>
                        <img src={phone} alt='phone' />
                        <span>+7 (495) 555-55-55</span>
                    </div>

                    <div>
                        <img src={adress} alt='adress' />
                        <span>г. Москва, ул. Расплетина, 24</span>
                    </div>
                </div>
            )}
            {type === 'header' && <div className='line' />}
        </div>
    );
};

export default Header;
