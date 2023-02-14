import { useState } from 'react';
import Banner from './components/Header/Banner';
import Home from './components/Home/Home';

type Props = {};

const App = (props: Props) => {
    const [search, setSearch] = useState<string>('');

    return (
        <div className='main'>
            <Banner search={search} setSearch={setSearch} type='header' />

            <div className='main_container'>
                <Home search={search} />
            </div>

            <Banner bgColor='#ECEAEA' type='footer' />
        </div>
    );
};

export default App;
