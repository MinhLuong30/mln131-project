"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Star,
  Users,
  Shield,
  Hammer,
  Wheat,
  GraduationCap,
  Factory,
  Crown,
  BookOpen,
  Target,
  Zap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Star className="h-8 w-8 text-primary animate-pulse-red fill-current" />
              <div className="absolute inset-0 h-8 w-8 text-secondary animate-pulse-red opacity-30">
                <Star className="h-8 w-8 fill-current" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-primary">
              Lịch Sử Đảng Cộng Sản Việt Nam
            </h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Navigation */}
      <nav className="bg-card border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#concept"
              className="hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-muted"
            >
              Khái Niệm Cơ Bản
            </a>
            <a
              href="#importance"
              className="hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-muted"
            >
              Tầm Quan Trọng
            </a>
            <a
              href="#structure"
              className="hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-muted"
            >
              Cơ Cấu Xã Hội
            </a>
            <a
              href="#alliance"
              className="hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-muted"
            >
              Liên Minh Việt Nam
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Concept Section */}
        <section id="concept" className="fade-in-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary star-decoration">
                Khái Niệm Cơ Bản
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH là
                  sự liên kết, hợp tác, hỗ trợ nhau giữa các giai cấp, tầng lớp
                  xã hội nhằm thực hiện nhu cầu và lợi ích của các chủ thể trong
                  khối liên minh, đồng thời tạo động lực thực hiện thắng lợi mục
                  tiêu của CNXH.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Crown className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Góc Độ Chính Trị</h3>
                <p className="text-sm text-muted-foreground">
                  Tập hợp lực lượng tiến hành cách mạng XHCN
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Factory className="h-8 w-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Góc Độ Kinh Tế</h3>
                <p className="text-sm text-muted-foreground">
                  Xây dựng nền tảng vật chất - kỹ thuật
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section id="importance" className="fade-in-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Tầm Quan Trọng
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Award className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                Đảm Bảo Vai Trò Lãnh Đạo
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Liên minh giữa giai cấp công nhân với giai cấp nông dân và tầng
                lớp trí thức là điều kiện đảm bảo vai trò lãnh đạo của giai cấp
                công nhân.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Target className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                Điều Kiện Quyết Định
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Là điều kiện quyết định thắng lợi trong cuộc đấu tranh giành
                chính quyền và công cuộc cải tạo xã hội mới.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Zap className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                Sức Mạnh Tổng Hợp
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Tạo ra sức mạnh tổng hợp đảm bảo cho thắng lợi của cuộc cách
                mạng xã hội chủ nghĩa.
              </p>
            </div>
          </div>
        </section>

        {/* Social Structure Section */}
        <section id="structure" className="fade-in-section">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary star-decoration">
              Cơ Cấu Xã Hội - Giai Cấp Trong Thời Kỳ Quá Độ
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trong sự biến đổi của cơ cấu xã hội - giai cấp, vị trí, vai trò
              của các giai cấp, tầng lớp xã hội ngày càng được khẳng định, vừa
              đảm bảo tính qui luật phổ biến, vừa mang tính độc thù của xã hội
              Việt Nam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Working Class */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <Hammer className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">
                  Giai Cấp Công Nhân
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là
                  Đảng Cộng sản Việt Nam
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Đại diện cho phương thức sản xuất tiên tiến
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Giữ vị trí tiên phong trong sự nghiệp xây dựng chủ nghĩa xã
                  hội
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Là lực lượng nòng cốt trong liên minh giai cấp
                </li>
              </ul>
            </div>

            {/* Peasant Class */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <Wheat className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-secondary">
                  Giai Cấp Nông Dân
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Có vị trí chiến lược trong công nghiệp hoá, hiện đại hoá nông
                  nghiệp
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Giữ gìn, phát huy bản sắc văn hoá dân tộc và bảo vệ môi trường
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Là chủ thể của quá trình phát triển, xây dựng nông thôn mới
                </li>
              </ul>
            </div>

            {/* Intellectuals */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">
                  Đội Ngũ Trí Thức
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Lực lượng lao động sáng tạo đặc biệt quan trọng trong CNH, HĐH
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Đóng góp vào xây dựng kinh tế tri thức
                </li>
                <li className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  Là lực lượng trong khối liên minh
                </li>
              </ul>
            </div>

            {/* Other Groups */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-secondary">
                  Các Tầng Lớp Khác
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Đội ngũ doanh nhân:
                  </h4>
                  <p className="text-sm">
                    Phát triển nhanh với vai trò không ngừng tăng lên trong phát
                    triển kinh tế - xã hội
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Phụ nữ:
                  </h4>
                  <p className="text-sm">
                    Lực lượng quan trọng và đông đảo trong đội ngũ những người
                    lao động
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Đội ngũ thanh niên:
                  </h4>
                  <p className="text-sm">
                    Trụ cột của nước nhà, chủ nhân tương lai của đất nước
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alliance in Vietnam Section */}
        <section id="alliance" className="fade-in-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Liên Minh Giai Cấp, Tầng Lớp Ở Việt Nam
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>

          <div className="space-y-12">
            {/* Economic Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Factory className="h-6 w-6 mr-3" />
                Liên Minh Về Kinh Tế
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> Thỏa mãn các nhu cầu, lợi ích kinh tế
                của các giai cấp, tầng lớp trong xã hội; xây dựng cơ sở vật chất
                - kỹ thuật cho chủ nghĩa xã hội.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Yêu cầu thực hiện:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Xác định đúng tiềm lực kinh tế và nhu cầu kinh tế</li>
                    <li>• Xác định cơ cấu kinh tế hợp lý</li>
                    <li>
                      • Tổ chức các hình thức giao lưu, hợp tác phát triển
                    </li>
                    <li>• Nâng cao hiệu quả chuyển giao khoa học, kỹ thuật</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Liên minh trên lĩnh vực kinh tế là cơ sở vật chất – kỹ
                    thuật của liên minh"
                  </p>
                </div>
              </div>
            </div>

            {/* Political Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                <Shield className="h-6 w-6 mr-3" />
                Liên Minh Về Chính Trị
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> Bảo vệ vững chắc chế độ chính trị,
                giữ vững độc lập dân tộc và định hướng đi lên Chủ nghĩa xã hội.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Yêu cầu thực hiện:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Đảm bảo sự lãnh đạo của ĐCS trong khối liên minh</li>
                    <li>• Hoàn thiện, phát huy dân chủ XHCN</li>
                    <li>• Xây dựng nhà nước pháp quyền XHCN</li>
                    <li>• Động viên nhân dân tham gia</li>
                    <li>
                      • Chống mọi biểu hiện tiêu cực và âm mưu diễn biến hòa
                      bình
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2 fill-current" />
                  <p className="text-sm text-muted-foreground text-center">
                    Đảng Cộng sản Việt Nam lãnh đạo
                  </p>
                </div>
              </div>
            </div>

            {/* Cultural-Social Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <BookOpen className="h-6 w-6 mr-3" />
                Liên Minh Về Văn Hóa - Xã Hội
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> Xây dựng nền văn hóa và con người
                Việt Nam phát triển toàn diện hướng tới chân - thiện - mỹ, thấm
                nhuần tinh thần dân tộc, nhân văn, dân chủ và khoa học.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Yêu cầu thực hiện:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Gắn tăng trưởng kinh tế với phát triển văn hóa</li>
                    <li>• Khắc phục khoảng cách phân hóa giàu nghèo</li>
                    <li>• Nâng cao chất lượng nguồn nhân lực</li>
                    <li>• Thực hiện tốt các chính sách xã hội</li>
                    <li>• Chăm lo sức khỏe, an sinh xã hội</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="flex justify-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chân - Thiện - Mỹ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="vietnam-gradient text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mb-4 flex justify-center">
            <Star className="h-12 w-12 animate-pulse-red text-white fill-current" />
            <div className="absolute inset-0 h-12 w-12 text-yellow-300 animate-pulse opacity-40">
              <Star className="h-12 w-12 fill-current" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Đảng Cộng Sản Việt Nam
          </h3>
          <p className="text-lg opacity-90 mb-6 text-white">
            Lãnh đạo nhân dân ta đi từ thắng lợi này đến thắng lợi khác
          </p>
          <div className="flex justify-center space-x-4">
            <div className="h-1 w-16 bg-white/80 rounded"></div>
            <div className="h-1 w-8 bg-white rounded"></div>
            <div className="h-1 w-16 bg-white/80 rounded"></div>
          </div>
          <p className="text-sm opacity-75 mt-8 text-white">
            © 2025 - Tài liệu giáo dục về lịch sử Đảng Cộng sản Việt Nam
          </p>
        </div>
      </footer>
    </div>
  );
}
