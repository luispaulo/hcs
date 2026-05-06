'use client'

import { SearchIcon, FileText, Eye } from 'lucide-react'
import { Card } from '@/components/ui/card'

const services = [
  {
    icon: SearchIcon,
    title: 'Pesquisa de Viabilidade',
    description: 'Análise completa e detalhada de sua marca no INPI, verificando disponibilidade e conflitos potenciais.',
  },
  {
    icon: FileText,
    title: 'Registro de Marca',
    description: 'Processo completo de depósito da sua marca no INPI com toda a documentação necessária.',
  },
  {
    icon: Eye,
    title: 'Monitoramento',
    description: 'Vigilância contínua para proteger sua marca contra uso indevido ou registro de concorrentes.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4 sm:py-32 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para a proteção da sua marca intelectual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-yellow-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}