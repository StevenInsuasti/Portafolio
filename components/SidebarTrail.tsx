'use client'

import { useEffect, useRef } from 'react'

interface Blob {
  x: number
  y: number
  r: number
  alpha: number
  color: string
  decay: number
}

const COLORS = ['#06b6d4', '#4ade80', '#f59e0b', '#f97316', '#facc15', '#34d399']

export default function SidebarTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blobsRef = useRef<Blob[]>([])
  const animRef = useRef<number>(0)
  const lastPos = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Use the closest positioned parent as the event target
    const parent = canvas.parentElement
    const target = parent ?? canvas

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const last = lastPos.current
      if (last && Math.hypot(x - last.x, y - last.y) < 10) return
      lastPos.current = { x, y }

      blobsRef.current.push({
        x,
        y,
        r: 22 + Math.random() * 18,
        alpha: 0.55,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        decay: 0.012 + Math.random() * 0.008,
      })
    }

    target.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blobsRef.current = blobsRef.current.filter(b => b.alpha > 0)

      for (const b of blobsRef.current) {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        grad.addColorStop(0, b.color + Math.round(b.alpha * 255).toString(16).padStart(2, '0'))
        grad.addColorStop(1, b.color + '00')
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        b.alpha -= b.decay
        b.r += 0.5
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      target.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', zIndex: 1 }}
    />
  )
}
