export default function GarageDoorSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Garage Door Tune-Ups & Maintenance
          </h1>

          <p className="text-xl text-gray-700 max-w-2xl mb-8">
            Local garage door maintenance service helping homeowners keep their
            doors quiet, smooth, and safe.
          </p>

          <img
            src="/Forester.png"
            alt="Garage service vehicle"
            className="rounded-2xl mt-6 w-full max-w-2xl"
          />

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:2242454738"
              className="bg-black text-white px-6 py-3 rounded-2xl text-lg shadow"
            >
              Call or Text Now
            </a>

            <a
              href="mailto:ag44706@gmail.com"
              className="border border-gray-300 px-6 py-3 rounded-2xl text-lg"
            >
              Get a Quote
            </a>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Garage door tune-ups",
            "Lubrication & hardware tightening",
            "Door balance checks",
            "Roller & hinge inspections",
            "Track alignment inspections",
            "Garage opener safety checks",
            "Preventative maintenance",
            "Noise & vibration reduction"
          ].map((service) => (
            <div
              key={service}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-lg font-medium">
                {service}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 border-y border-gray-200">

        <div className="max-w-5xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold mb-6">
            Service Areas
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Proudly serving Streamwood, Bartlett, Elgin, Schaumburg,
            Hanover Park, Hoffman Estates, and surrounding communities.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold mb-6">
            Contact
          </h2>

          <div className="space-y-3 text-lg">
            <p>Phone: (224) 245-4738</p>
            <p>Email: ag44706@gmail.com</p>
            <p>Hours: Mon–Sat | 4 PM – 8 PM</p>
          </div>

        </div>
      </section>

    </div>
  )
}
