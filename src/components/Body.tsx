export const Body = () => {
    return (
        <div className="body">
            <div className="first-col">
                <h1 className="first-col__title">Зарабатывайте больше</h1>
                <h1 className="first-col__name">c WELBEX</h1>
                <p className="first-col__tagline">Развиваем и контролируем продажи за вас</p>
            </div>

            <div className="second-col">
                <h2 className="second-col__title">Вместе с&nbsp;
                    <span className="second-col__span">
                        БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ &nbsp;
                    </span>
                    мы дарим:</h2>

                    <div className="second-col-row">
                        <div className="second-col-cell">
                            <p className="second-col-cell__title">ВИДЖЕТЫ</p>
                            <p className="second-col-cell__descr">30 готовых решений</p>
                        </div>
                        <div className="second-col-cell">
                            <p className="second-col-cell__title">DASHBOARD</p>
                            <p className="second-col-cell__descr">с показателями вашего бизнеса</p>
                        </div>
                    </div>
                    <div className="second-col-row">
                        <div className="second-col-cell">
                            <p className="second-col-cell__title">SKYPE АУДИТ</p>
                            <p className="second-col-cell__descr">отдела продаж и CRM-системы</p>
                        </div>
                        <div className="second-col-cell">
                            <p className="second-col-cell__title">35 ДЕНЙ</p>
                            <p className="second-col-cell__descr">использования CRM</p>
                        </div>
                    </div>

                    <button className="second-col__button">Получить консультацию</button>
            </div>
        </div>
    )
}