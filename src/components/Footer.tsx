export default function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between rounded-t-3xl shadow-2xl gap-6 md:gap-0">

                {/* Логотип */}
                <a href="/" className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold hover:opacity-60">
                    FlashLink
                </a>

                {/* Контакты */}
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm sm:text-[15px] md:text-base">

                        {/* Владислав */}
                        <li>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                                <span className="font-semibold">Владислав :</span>
                                <div className="flex items-start gap-4">
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/telegram.svg" alt="Telegram" />
                                    </a>
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/instagram.svg" alt="Instagram" />
                                    </a>
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/call-me-hand.svg" alt="Call" />
                                    </a>
                                </div>
                            </div>
                        </li>

                        {/* Теймур */}
                        <li>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                                <span className="font-semibold">Теймур :</span>
                                <div className="flex items-start gap-4">
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/telegram.svg" alt="Telegram" />
                                    </a>
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/instagram.svg" alt="Instagram" />
                                    </a>
                                    <a href="#!" className="hover:opacity-60 w-8 h-8">
                                        <img src="/image/svg/call-me-hand.svg" alt="Call" />
                                    </a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
        </footer>




    )
}