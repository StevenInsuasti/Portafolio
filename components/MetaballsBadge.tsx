'use client'

import { useEffect, useRef } from 'react'

interface Props {
  text: string
}

export default function MetaballsBadge({ text }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const colors = ['#06b6d4', '#4ade80', '#f59e0b', '#f97316', '#facc15', '#34d399']

    const minSpeed = 0.4
    const randV = () => {
      const v = (Math.random() - 0.5) * 1.2
      return Math.abs(v) < minSpeed ? minSpeed * Math.sign(v || 1) : v
    }

    const balls = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: randV(),
      vy: randV(),
      r: 18 + Math.random() * 14,
      color: colors[i % colors.length],
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      balls.forEach(b => {
        b.x += b.vx
        b.y += b.vy
        if (b.x - b.r < 0 || b.x + b.r > W) b.vx *= -1
        if (b.y - b.r < 0 || b.y + b.r > H) b.vy *= -1

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        grad.addColorStop(0, b.color + 'cc')
        grad.addColorStop(1, b.color + '00')
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="relative inline-flex items-center w-fit overflow-hidden rounded-lg border border-[#4ade80]/30"
      style={{ background: '#1e293b' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }} />
      <span className="relative z-10 text-sm font-bold px-4 py-2 text-white"
        style={{ fontFamily: 'monospace', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
        {text}
      </span>
    </div>
  )
}
