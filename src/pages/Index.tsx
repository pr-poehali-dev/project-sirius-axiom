import { useState } from "react"
import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#0f1629", "#1e3a8a", "#2563eb", "#1d4ed8"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                Каталог ЭБУ
                <br />
                для любого авто
              </h1>
              <p className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg">
                Электронные блоки управления для легковых и грузовых автомобилей. Оригинальные и восстановленные ЭБУ с гарантией — быстрый подбор по марке, модели и VIN.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-2xl">
                  Перейти в каталог
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-xl">
                  Подобрать по VIN
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Section */}
        <section id="catalog" className="relative z-10 px-5 sm:px-20 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 drop-shadow-lg">
              Популярные позиции
            </h2>
            <p className="text-white/70 text-center mb-12 text-lg">
              Оригинальные и восстановленные ЭБУ в наличии с гарантией
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: "https://cdn.poehali.dev/projects/94d7c2af-080f-43d4-9cd1-0dd900ad3617/files/993ae8f0-f5b9-4e04-96a0-04685e3bdb5c.jpg",
                  title: "ЭБУ двигателя",
                  desc: "Блок управления двигателем. Подходит для большинства марок.",
                  price: "от 4 500 ₽",
                },
                {
                  img: "https://cdn.poehali.dev/projects/94d7c2af-080f-43d4-9cd1-0dd900ad3617/files/d9fb7701-01fe-4203-8d85-c17cf89824aa.jpg",
                  title: "Модуль управления АКПП",
                  desc: "Электронный блок управления автоматической коробкой передач.",
                  price: "от 6 200 ₽",
                },
                {
                  img: "https://cdn.poehali.dev/projects/94d7c2af-080f-43d4-9cd1-0dd900ad3617/files/e397ffa2-63df-47db-b977-c871b791206b.jpg",
                  title: "Блок ABS / ESP",
                  desc: "Контроллер системы антиблокировки и стабилизации.",
                  price: "от 3 800 ₽",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-bold text-xl">{item.price}</span>
                      <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                        Заказать
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contacts" className="relative z-10 px-5 sm:px-20 py-24">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 drop-shadow-lg">
              Оставить заявку
            </h2>
            <p className="text-white/70 text-center mb-10 text-lg">
              Укажите марку авто и нужный блок — мы подберём и свяжемся с вами
            </p>

            {sent ? (
              <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white text-2xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-white/70">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-5 shadow-2xl"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/80 text-sm font-medium">Марка авто и нужный ЭБУ</label>
                  <textarea
                    rows={3}
                    placeholder="Например: Toyota Camry 2015, ЭБУ двигателя 2GR-FE"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 text-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Index