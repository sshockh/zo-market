import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import s from './Store.module.css';

const Store = () => {
    return (
        <div className={s.store}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Store;