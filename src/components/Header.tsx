export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img src="/img/logo_welbex.png" width={140} height={24} />
                <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
            </div>

            <nav className="header-nav">
                <button className="nav-button">Услуги</button>
                <button className="nav-button">Виджеты</button>
                <button className="nav-button">Интеграции</button>
                <button className="nav-button">Кейсы</button>
                <button className="nav-button nav-buttonSert">Сертификаты</button>
            </nav>

            <div className="header-contacts">
                <a className="header-contacts__phone" href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
                <div className="header-contacts-buttons">
                    <button className="header-contacts__button img-telegram" />
                    <button className="header-contacts__button img-phone" />
                    <button className="header-contacts__button img-whatsapp" />
                </div>
            </div>


        </div>
    )
}