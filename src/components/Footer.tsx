export const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-col">
                <div className="col1-title col__title">О КОПМАНИИ</div>
                <div className="footer-col-items">
                    <a href="/" className="footer__linkItem footer__linkItemCo"><span>Партнёрская программа</span></a>
                    <a href="/" className="footer__linkItem footer__linkItemCo"><span>Вакансии</span></a>
                </div>
            </div>

            <div className="footer-col">
                <div className="col2-title col__title">МЕНЮ</div>
                <div className="footer-col-items">
                    <a href="/" className="footer__linkItem"><span>Расчёт стоимости</span></a>
                    <a href="/" className="footer__linkItem"><span>Услуги</span></a>
                    <a href="/" className="footer__linkItem"><span>Виджеты</span></a>
                    <a href="/" className="footer__linkItem"><span>Интеграции</span></a>
                    <a href="/" className="footer__linkItem"><span>Наши клиенты</span></a>
                    <a href="/" className="footer__linkItem footer__linkItemMobile"><span>Благодарность клиентов</span></a>
                    <a href="/" className="footer__linkItem"><span>Кейсы</span></a>
                    <a href="/" className="footer__linkItem footer__linkItemMail"><span>Благодарственные письма</span></a>
                    <a href="/" className="footer__linkItem"><span>Сертификаты</span></a>
                    <a href="/" className="footer__linkItem"><span>Блог на YouTube</span></a>
                    <a href="/" className="footer__linkItem"><span>Вопрос / ответ</span></a>
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