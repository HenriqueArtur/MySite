'use client'

import { useState, useEffect } from 'react'

export default function Clock() {
  const [date, setDate] = useState<string>()

  useEffect(() => {
    const timer = setInterval(() => {
      return setDate(dateUpdated())
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-1 text-brand-text-2 text-sm" >
      <span className="block w-[60px] whitespace-nowrap" > {date} </span>
      <span>·</span>
      <p>Ceará, Brazil</p>
    </div>
  )
}

function dateUpdated() {
  return new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Fortaleza' })
}
