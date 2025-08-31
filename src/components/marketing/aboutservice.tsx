"use client"

import type * as React from "react"
import { useId } from "react"
import { motion } from "framer-motion"
import { Mic } from "lucide-react"
import { cn } from "@/lib"

/**
 * AboutService
 * Recreates the reference CONTACTS section but with service tags instead of social networks.
 * - Monochrome palette (black/white) to match the reference.
 * - Scattered pill tags with slight rotations.
 * - Two circular "Consult With Us" badges using SVG textPath.
 * - Large rounded black footer bar with headline and small supporting copy.
 */

type Pill = {
  text: string
  x: number
  y: number
  rotate: number
  dark?: boolean // black pill with white text
  w?: number // fixed width for precise spacing
}

function CircleBadge({
  size = 260,
  className,
  text = "Consult With Us • ",
}: {
  size?: number
  className?: string
  text?: string
}) {
  const id = useId()
  const c = size / 2
  const R = size / 2
  const thickness = Math.round(size * 0.1) // ~10% thickness
  const rInner = R - thickness
  const rText = R - thickness * 0.5 // sit text mid-ring

  return (
    <div
      aria-hidden
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0" aria-hidden="true">
        <defs>
          <path
            id={`circlePath-${id}`}
            d={`M ${c},${c} m -${rText},0 a ${rText},${rText} 0 1,1 ${rText * 2},0 a ${rText},${rText} 0 1,1 -${
              rText * 2
            },0`}
          />
        </defs>
        {/* outer disc */}
        <circle cx={c} cy={c} r={R} fill="black" />
        {/* inner knockout to create ring */}
        <circle cx={c} cy={c} r={rInner} fill="white" />
        {/* ring text */}
        <text fill="white" fontSize={Math.max(12, Math.round(size * 0.06))} style={{ fontWeight: 600 }}>
          <textPath href={`#circlePath-${id}`} startOffset="0%">
            {Array.from({ length: 12 })
              .map(() => text)
              .join("")}
          </textPath>
        </text>
      </svg>

      {/* inner disc */}
      <div
        className="rounded-full flex items-center justify-center bg-black"
        style={{ width: size * 0.36, height: size * 0.36 }}
      >
        <Mic className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
    </div>
  )
}

function PillTag({
  text,
  rotate = 0,
  dark = false,
  w,
  className,
  style,
}: {
  text: string
  rotate?: number
  dark?: boolean
  w?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, rotate: rotate - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "absolute inline-flex h-14 items-center justify-center rounded-full border-2",
        "text-sm md:text-base font-semibold tracking-[0.08em] uppercase leading-none",
        dark ? "bg-black text-white border-black" : "bg-white text-black border-black",
        "shadow-none",
        className,
      )}
      style={{ width: w, ...style }}
    >
      <span className="px-6">{text}</span>
    </motion.div>
  )
}

export default function AboutService() {
  const pills: Pill[] = [
    // Left cluster (reference: VIMEO / PINTEREST / TWITTER analogs)
    { text: "WEBSITE DEVELOPMENT", x: 210, y: -12, rotate: -10, w: 300 }, // top-left
    { text: "SOCIAL MEDIA MANAGEMENT", x: 370, y: 150, rotate: -12, w: 410 }, // lower-left long
    { text: "SEO & ANALYTICS", x: 640, y: 164, rotate: -8, w: 280 }, // lower center small

    // Tiny tags near left rings
    { text: "UI", x: 440, y: 86, rotate: -18, w: 110 }, // small white near rings
    { text: "UX", x: 260, y: 64, rotate: 8, w: 110, dark: true }, // small dark accent

    // Center stack (reference: FACEBOOK / INSTAGRAM)
    { text: "APP DEVELOPMENT", x: 740, y: -18, rotate: 24, w: 300, dark: true }, // dark diagonal
    { text: "GHOST WRITING", x: 840, y: 62, rotate: -6, w: 270 }, // white over dark

    // Overlapping lower white (reference: long white strip)
    { text: "GRAPHIC DESIGNING", x: 880, y: 116, rotate: -10, w: 310 }, // white lower

    // Right cluster (reference: LINKEDIN & YOUTUBE)
    { text: "HOSTING & SERVICES", x: 1080, y: -14, rotate: -24, w: 320, dark: true }, // high right dark
    { text: "VIDEO EDITING", x: 960, y: 150, rotate: -2, w: 230, dark: true }, // right dark pill near bar
  ]

  return (
    <section aria-label="Contact and services" className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10">
        {/* Top collage */}
        <div className="relative h-[280px]">
          {/* Left big + small badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="absolute left-[-20px] top-[18px] z-0"
          >
            <CircleBadge size={260} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.03 }}
            className="absolute left-[300px] top-[10px] z-10"
          >
            <CircleBadge size={180} />
          </motion.div>

          {/* Right big badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="absolute right-[-16px] top-[14px] z-0"
          >
            <CircleBadge size={260} />
          </motion.div>

          {/* Pills with explicit layering */}
          {pills.map((p, i) => (
            <PillTag
              key={`${p.text}-${i}`}
              text={p.text}
              rotate={p.rotate}
              dark={p.dark}
              w={p.w}
              // raise critical overlaps like APP DEVELOPMENT (i=5), HOSTING & SERVICES (i=8)
              className={cn(
                i === 0 && "z-20",
                i === 1 && "z-10",
                i === 5 && "z-30",
                i === 6 && "z-20",
                i === 8 && "z-30",
                i === 9 && "z-20",
              )}
              style={{ left: p.x, top: p.y } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 rounded-2xl bg-black text-white">
          <div className="px-6 sm:px-10 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm md:text-base">
              <p className="opacity-90">We Invite You To Contact Our Team For More Information.</p>
              <p className="opacity-90 text-center">Let&apos;s Stay Connected</p>
              <p className="opacity-90 text-right">©2025 All Rights Reserved</p>
            </div>
          </div>
          <div className="px-6 sm:px-10 py-8">
            <h2 className="text-pretty text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.08em]">
              CONTACTS <span aria-hidden>•</span> US
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
