import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import s from './Shop.module.css';

const Shop = () => {
    return (
        <div className={s.shop}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Shop;