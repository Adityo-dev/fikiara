"use client";
import React, { useState } from "react";
import Link from "next/link";
import { DollarSign, Handshake, HelpCircle, Info, Layers, Lock, Network, Star, Play, X } from "lucide-react";

const NODES = [
  { id: "benefits", label: "Benefits & Value", Icon: Star, href: "/benefits", x: 16, y: 18, color: "text-yellow-500" },
  { id: "features", label: "Features", Icon: Layers, href: "/features", x: 84, y: 18, color: "text-purple-600" },
  { id: "ecosystem", label: "Ecosystem & Community", Icon: Network, href: "/ecosystem", x: 16, y: 38, color: "text-teal-600" },
  { id: "about", label: "About, Vision & Media", Icon: Info, href: "/about", x: 84, y: 38, color: "text-blue-500" },
  { id: "pricing", label: "Pricing & Business Model", Icon: DollarSign, href: "/pricing", x: 16, y: 60, color: "text-green-600" },
  { id: "support", label: "Support & Help", Icon: HelpCircle, href: "/support", x: 84, y: 60, color: "text-orange-500" },
  { id: "security", label: "Security & Trust", Icon: Lock, href: "/trust", x: 26, y: 80, color: "text-gray-700" },
  { id: "careers", label: "Careers & Partnership", Icon: Handshake, href: "/careers", x: 74, y: 80, color: "text-pink-600" },
];

const CENTER = { x: 50, y: 50 };

function connectorPath(ax, ay, bx, by) {
  const cx = ax < bx ? (ax + bx) / 2 - 8 : (ax + bx) / 2 + 8;
  const cy = (ay + by) / 2;
  return `M ${ax},${ay} Q ${cx},${cy} ${bx},${by}`;
}

function NodeBox({ x, y, label, Icon, href, color }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <Link href={href}>
        <div className="flex cursor-pointer items-center gap-2 rounded-2xl border border-neutral-300 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm hover:bg-neutral-100 transition">
          <span className="inline-flex size-6 items-center justify-center rounded-full border border-neutral-300">
            <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
          </span>
          <span className="text-sm font-medium text-neutral-800 whitespace-nowrap">
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function FikiaraMindMap() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative mx-auto h-[80vh] w-full max-w-5xl select-none overflow-hidden rounded-2xl p-4">
      {/* SVG connectors */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {NODES.map((n) => (
          <path
            key={n.id}
            d={connectorPath(CENTER.x, CENTER.y, n.x, n.y)}
            fill="none"
            stroke="#0f172a"
            strokeOpacity="0.35"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      {/* Center node (circle design) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full border border-neutral-300 bg-white shadow-md text-center p-2">
          <div className="text-lg font-semibold tracking-wide text-neutral-900">
            Fikiara
          </div>
          <div className="text-[10px] text-neutral-600 mt-1">
            Where Gold Grows <br /> from Knowledge.
          </div>
          <button
            onClick={() => setShowVideo(true)}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700 hover:bg-neutral-200 transition"
          >
            <Play className="h-3 w-3 text-red-600" />
          </button>
        </div>
      </div>

      {/* Branch nodes */}
      {NODES.map((n) => (
        <NodeBox
          key={n.id}
          x={n.x}
          y={n.y}
          label={n.label}
          Icon={n.Icon}
          href={n.href}
          color={n.color}
        />
      ))}

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1 hover:bg-white"
            >
              <X className="h-5 w-5 text-black" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9qnuRweb1wM?si=_WCdXCp1Hb28YJWK"
              title="Fikiara Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
