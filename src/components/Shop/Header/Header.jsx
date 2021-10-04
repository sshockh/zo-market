import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                {/*  <img src="https://cdn1.ozone.ru/s3/cms/13/te9/logo-logo-ozon-blue.svg" alt="logo" />
             */}
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
            </div>
            <div className={s.catalog}>
                <button>Каталог товаров</button>
            </div>
            <div className={s.search}>
                <input type="text" />
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <img src="https://cdn-icons-png.flaticon.com/512/633/633779.png" alt="profile" />
                    <p>Войти</p>
                </div>
                <div className={s.button}>
                    <img src="https://cdn-icons-png.flaticon.com/512/20/20119.png" alt="favourites" />
                    <p>Избранное</p>
                </div>
                <div className={s.button}>
                    <img src="https://cdn-icons-png.flaticon.com/512/900/900772.png" alt="compare" />
                    <p>Сравнение</p>
                </div>
                <div className={s.button}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1124/1124199.png" alt="cart" />
                    <p>Корзина</p>
                </div>
            </div>
        </div>
    )
}

export default Header;