'use client'

import { CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

const reasons = [
  'Atendimento personalizado',
  'Transparência total',
  'Acompanhamento completo',
  'Estratégia jurídica',
  'Suporte pós-registro',
  'Resposta rápida (24h)',
  'Segurança',
  'Experiência (centenas de marcas)',
  'Dedicação total',
]

export function WhyChooseSection() {
  return (
    <section id="por-que-hcs" className="py-20 px-4 sm:py-32 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a HCS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confiança, segurança e experiência em registro de marcas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 border border-gray-200 hover:border-blue-900 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}