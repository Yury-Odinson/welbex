export const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-col">
                <div className="col1-title col__title">О КОПМАНИИ</div>
                <div className="footer-col-items">
                    <a href="/" className="footer__linkItem">Партнёрская программа</a>
                    <a href="/" className="footer__linkItem">Вакансии</a>
                </div>
            </div>

            <div className="footer-col">
                <div className="col2-title col__title">МЕНЮ</div>
                <div className="footer-col-items">
                    <a href="/" className="footer__linkItem">Расчёт стоимости</a>
                    <a href="/" className="footer__linkItem">Услуги</a>
                    <a href="/" className="footer__linkItem">Виджеты</a>
                    <a href="/" className="footer__linkItem">Интеграции</a>
                    <a href="/" className="footer__linkItem">Наши клиенты</a>
                    <a href="/" className="footer__linkItem">Кейсы</a>
                    <a href="/" className="footer__linkItem">Благодарственные письма</a>
                    <a href="/" className="footer__linkItem">Сертификаты</a>
                    <a href="/" className="footer__linkItem">Блог на YouTube</a>
                    <a href="/" className="footer__linkItem">Вопрос / ответ</a>
                </div>
            </div>

            <div className="footer-col">
                <div className="col3-title col__title">КОНТАКТЫ</div>
                <div className="footer-col-items">
                    <a className="header-contacts__phone" href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
                    <div className="footer-contacts-buttons">
                        <button className="header-contacts__button img-telegram" />
                        <button className="header-contacts__button img-phone" />
                        <button className="header-contacts__button img-whatsapp" />
                    </div>

                    <p className="footer-contacts__address">Москва, Путевой проезд 3c1, к 902</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p className="footer-copyright__text">©WELBEX 2022. Все права защищены.</p>
                <p className="footer-copyright__link">
                    <a href="/">Политика конфиденциальности</a>
                </p>
            </div>
        </div>
    )
}