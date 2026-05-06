import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white py-12 border-t border-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold">
                HCS
              </div>
              <span className="font-display font-bold text-lg">HCS Registro de Marcas</span>
            </div>
            <p className="text-blue-100 text-sm">Especialista em propriedade intelectual e registro de marcas no INPI</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Links Rápidos</h3>
            <div className="flex flex-col gap-2 text-sm text-blue-100">
              <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
              <a href="#como-funciona" className="hover:text-yellow-400 transition-colors">Como Funciona</a>
              <a href="#por-que-hcs" className="hover:text-yellow-400 transition-colors">Por Que HCS</a>
              <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contato</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-100">
              <a href="mailto:luispaulolpsn@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Mail size={16} />
                luispaulolpsn@gmail.com
              </a>
              <a href="https://wa.me/5561982481004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone size={16} />
                (61) 98248-1004
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Brasília - DF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-blue-200 text-sm">
            © {currentYear} HCS Registro de Marcas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}