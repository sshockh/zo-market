import s from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={s.header}>
                <h1>Header</h1>
            </div>
            <div className={[s.header, s.stickyHeader].join(' ')}>
                <h1>Sticky-Header</h1>
            </div>
        </>
    )
}

export default Header;