import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.location}>
                <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/927/927667.png" alt="location" />
                    {' '}
                    Тамбов
                </a>
            </div>
            <div className={s.menu}>
                <a href="#" className={s.link}>Мобильное приложение</a>
                <a href="#" className={s.link}>Подарочные сертификаты</a>
                <a href="#" className={s.link}>Доставка</a>
                <a href="#" className={s.link}>Пункты выдачи</a>
                <a href="#" className={s.link}>Обратная связь</a>
            </div>
            <div className={s.phone}>
                <img src="https://cdn-icons-png.flaticon.com/512/481/481300.png" alt="phone" />
                {' '}8-800-77-07-999 (c 09:00 до 18:00)
            </div>
        </div>
    )
}

export default Nav;