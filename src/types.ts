export interface IHeaderTitleConfig {
    title: string;
    route: string;
    id: number;
}

export enum buttonTypes {
    normal = 'normal',
    inCart = 'inCart',
}

export enum buttonTitles {
    buy = 'Купить',
    inCart = 'В корзине',
}

export interface IBtnState {
    btnType?: 'normal' | 'inCart';
    btnTitle?: 'Купить' | 'В корзине';
}
export interface IHomePicConfig {
    id: number;
    image: string;
    title: string;
    price: number;
    discount: number;
    hasPicture: boolean;
    btnState: IBtnState;
}
