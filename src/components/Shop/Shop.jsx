import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import s from './Shop.module.css';

/* Ограничение содержимого по ширине */
const ContentWidthLimitContainer = (Component) => {
    return (
        <div className={s.contentContainer}>
            <Component />
        </div>
    )
}

const Shop = () => {
    return (
        <div className={s.shop}>
            <nav className={s.nav}>
                {ContentWidthLimitContainer(Nav)}
            </nav>
            <header className={s.header}>
                {ContentWidthLimitContainer(Header)}
            </header>
            <main className={s.main}>
                {ContentWidthLimitContainer(Main)}
            </main>
            <footer className={s.footer}>
                {ContentWidthLimitContainer(Footer)}
            </footer>
        </div>
    )
}

export default Shop;