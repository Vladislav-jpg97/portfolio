export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-7 flex items-center justify-between rounded-b-3xl shadow-xl">

                {/* Логотип */}
                <a href="/" className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold hover:opacity-60">
                    FlashLink
                </a>

                {/* Навигация */}
                <nav>
                    <ul className="flex items-center gap-4 sm:gap-6 md:gap-6 lg:gap-6 text-base sm:text-lg md:text-xl lg:text-xl">
                        <li>
                            <a href="/" className="hover:opacity-60">
                                Работы
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:opacity-60">
                                О нас
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>



    )
}
