'use client';

import Link from "next/link";
import { Star } from "lucide-react";
import MindMapDiagram from "@/components/MindMapDiagram";

export default function Home() {
  return (
    <div className="min-h-screen  min-w-screen max-w-screen bg-background text-foreground">
      {/* Hero Section - Duplicated from Content Page */}
      <section className="vietnam-gradient text-white py-20">
        <div className="container mx-auto max-w-screen px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="relative mb-6 flex justify-center">
              <Star className="h-16 w-16 animate-pulse-red text-white fill-current" />
              <div className="absolute inset-0 h-16 w-16 text-yellow-300 animate-pulse opacity-50">
                <Star className="h-16 w-16 fill-current" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
              Liên Minh Giai Cấp, Tầng Lớp
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto opacity-90 text-white">
              Trong Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội
            </p>
            <div className="flex justify-center space-x-4">
              <div className="h-1 w-16 bg-white/80 rounded"></div>
              <div className="h-1 w-8 bg-white rounded"></div>
              <div className="h-1 w-16 bg-white/80 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blank Content Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="min-h-screen">

          {/* Mind Map Diagram Section */}
          <MindMapDiagram />

        </div>
      </main>
    </div>
  );
}
