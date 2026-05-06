'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShieldCheckIcon } from 'lucide-react'

export function HeroSection() {
  const [marcasCount, setMarcasCount] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !showAnimation) {
          setShowAnimation(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('hero-stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [showAnimation])

  useEffect(() => {
    if (!showAnimation) return

    let current = 0
    const target = 500
    const increment = target / 30

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setMarcasCount(500)
        clearInterval(timer)
      } else {
        setMarcasCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [showAnimation])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Proteja sua marca com segurança jurídica
            </h1>
            <p className="text-lg text-blue-100">
              Somos especialistas em registro de marcas no INPI com mais de 10 anos de experiência. Garantimos uma taxa de aprovação de 98% com atendimento personalizado e transparente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-6 text-base"
              >
                Solicitar Análise Gratuita
              </Button>
              <Button
                onClick={() => scrollToSection('servicos')}
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-base"
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-4 bg-yellow-500/20 rounded-full flex items-center justify-center border-4 border-yellow-500/50">
                <ShieldCheckIcon size={120} className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div id="hero-stats" className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-700">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-yellow-400 mb-2">
              +{marcasCount}
            </div>
            <p className="text-blue-100">Marcas Registradas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-yellow-400 mb-2">98%</div>
            <p className="text-blue-100">Taxa de Aprovação</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-yellow-400 mb-2">10+</div>
            <p className="text-blue-100">Anos de Atuação</p>
          </div>
        </div>
      </div>
    </section>
  )
}