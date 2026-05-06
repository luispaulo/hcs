'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561982481004?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20análise%20gratuita%20de%20registro%20de%20marca."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2"
      title="Enviar mensagem no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-semibold">Whatsapp</span>
    </a>
  )
}