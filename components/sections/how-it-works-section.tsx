'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Análise Gratuita',
    description: 'Você nos envia informações sobre sua marca e fazemos uma avaliação preliminar.',
  },
  {
    number: '02',
    title: 'Pesquisa Técnica',
    description: 'Verificação completa no INPI e em bases internacionais relevantes.',
  },
  {
    number: '03',
    title: 'Depósito',
    description: 'Protocolo da sua marca com toda documentação necessária no INPI.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Suporte completo até a obtenção do certificado final de registro.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:py-32 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo simplificado em 4 etapas
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="bg-gray-50 rounded-lg p-6 h-full border border-gray-200 hover:border-blue-900 transition-colors">
                <div className="w-12 h-12 bg-blue-900 text-yellow-400 rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-blue-900" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}