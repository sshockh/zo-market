import s from './Main.module.css';

const Main = () => {
    return (
        <div className={s.main}>
            <div className="slider">
                <img src="https://cdn1.ozone.ru/s3/cms/35/t90/wc1450/desk.jpg" alt="slider" />
            </div>
            <div className="topProducts">
                Хиты продаж
            </div>
            <div className="hotProducts">
                Горячие предложения
            </div>
            <div className="topBrands">
                Популярные бренды
            </div>
            <div className="visited">
                Вы смотрели
            </div>
        </div>
    )
}

export default Main;