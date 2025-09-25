'use client';

'use client';

import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Duplicated from Content Page */}
      <section className="vietnam-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
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
          {/* Quick Navigation */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Khám Phá Nội Dung
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trang chủ của dự án MLN131. Nội dung chi tiết về lịch sử Đảng Cộng sản Việt Nam đã được chuyển sang{' '}
              <Link href="/content" className="text-primary hover:underline font-semibold">
                trang nội dung chuyên biệt
              </Link>
            </p>
            
            {/* Navigation Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Link
                href="/content"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Nội Dung Chính</h3>
                <p className="text-sm text-muted-foreground">
                  Liên minh giai cấp, tầng lớp trong thời kỳ quá độ
                </p>
              </Link>
              
              <Link
                href="/about"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">ℹ️</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Giới Thiệu</h3>
                <p className="text-sm text-muted-foreground">
                  Thông tin về dự án và mục tiêu
                </p>
              </Link>
              
              <Link
                href="/services"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Dịch Vụ</h3>
                <p className="text-sm text-muted-foreground">
                  Các dịch vụ và tính năng hỗ trợ
                </p>
              </Link>
              
              <Link
                href="/contact"
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Liên Hệ</h3>
                <p className="text-sm text-muted-foreground">
                  Thông tin liên hệ và phản hồi
                </p>
              </Link>
            </div>
          </div>

          {/* Animated Logo Demo Section */}
          <div className="bg-card rounded-lg border p-12 text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                🎯 Logo Animation Demo
              </h2>
              <p className="text-muted-foreground mb-8">
                Animated version of the Party logo with outline drawing, fill, and glow effects
              </p>
              <div className="flex justify-center bg-muted/30 rounded-lg p-8">
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Click the logo to replay the animation
              </p>
            </div>
          </div>

          {/* Blank Customization Area */}
          <div className="bg-card rounded-lg border p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                🚀 Khu Vực Tùy Chỉnh
              </h2>
              <p className="text-muted-foreground mb-6">
                Đây là khu vực trống sẵn sàng cho bạn tùy chỉnh! Bạn có thể thêm các thành phần, 
                phần nội dung hoặc bất kỳ nội dung nào bạn cần cho dự án của mình.
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/30">
                <p className="text-muted-foreground text-sm">
                  Thêm nội dung tùy chỉnh của bạn ở đây...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
