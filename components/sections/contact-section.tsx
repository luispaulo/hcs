'use client'

import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 sm:py-32 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Solicitar Análise Gratuita
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Preencha o formulário ao lado e receba uma análise gratuita e sem compromisso sobre a viabilidade do registro de sua marca.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:luispaulolpsn@gmail.com" className="text-blue-900 hover:underline">
                    luispaulolpsn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a href="https://wa.me/5561982481004" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline">
                    (61) 98248-1004
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Localização</p>
                  <p className="text-gray-600">Brasília - DF, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}