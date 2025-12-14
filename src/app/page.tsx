export default function Page() {
    return (

        <section className="px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 text-black">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center">
                FlashLink
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">

                {/* Логотип / изображение */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl shadow-black/40 mb-8 md:mb-0">
                    <img
                        src="/image/pict/картинкаН.png"
                        alt="FlashLink логотип"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Текст */}
                <div className="text-center md:text-end space-y-4 sm:space-y-5 md:space-y-5 text-xl sm:text-2xl md:text-3xl text-black">
                    <p>Создавайте свои визитки онлайн</p>
                    <p>Делитесь контактами одним кликом</p>
                    <p>Подходит для соцсетей, портфолио и проектов</p>
                </div>

            </div>
        </section>



    )
}
