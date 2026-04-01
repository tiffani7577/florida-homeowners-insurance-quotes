import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Seguro de Casa Florida | Cotizaciones 2026 en Español',
  description: 'Compare cotizaciones de seguro para propietarios en Florida. Agentes que hablan español disponibles. Miami-Dade, Broward, Palm Beach. Llame ahora para una cotización gratis.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Agentes que hablan español disponibles
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Seguro de Casa en Florida —<br />
              <span className="text-orange-400">Cotizaciones Gratis en 2 Minutos</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              ¿Está pagando demasiado por su seguro de hogar en Florida? En 2026, las tarifas bajaron un promedio de 8.7% y hay 16 nuevas aseguradoras en el mercado. Nuestros agentes bilingües comparan múltiples compañías para encontrar la mejor tarifa para usted.
            </p>
            <CallButton variant="hero" label="Llame Ahora — Cotización Gratis" />
            <p className="text-blue-300 text-xs mt-3">Lun–Vie 9am–9pm · Sáb 12pm–5pm EST · Agentes bilingües</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">Lo que cambió en el seguro de Florida en 2026</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Las tarifas bajaron 8.7% para clientes de Citizens Insurance', body: 'Las reformas legales de 2022–2023 están reduciendo las primas. Si tiene Citizens Insurance y no ha comparado tarifas recientemente, es probable que esté pagando de más.' },
                { title: '16 nuevas aseguradoras entraron al mercado de Florida', body: 'Por primera vez en años, hay competencia real. Nuevas compañías están ofreciendo pólizas a precios competitivos, especialmente en Miami-Dade, Broward y Palm Beach.' },
                { title: 'Inspección de mitigación de viento puede ahorrarle 10–45%', body: 'Si su casa tiene ventanas de impacto, techo de cadera o techo nuevo, puede calificar para créditos significativos. Una inspección cuesta $75–$150 y puede pagarse en el primer mes de ahorros.' },
                { title: 'Citizens está moviendo clientes a aseguradoras privadas', body: 'Si recibió una oferta de "take-out" de Citizens, tiene 30 días para aceptar o rechazar. No deje que expire sin comparar tarifas primero. Llámenos para ayudarle a evaluar la oferta.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">¿Listo para comparar su tarifa?</h3>
              <p className="text-blue-200 mb-6">Agentes bilingües disponibles. Comparamos 16 aseguradoras. Sin obligación.</p>
              <CallButton variant="hero" label="Llame Ahora — Cotización Gratis" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
      <ExitIntent />
    </>
  )
}
