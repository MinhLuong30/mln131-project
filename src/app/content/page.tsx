"use client";
import { useEffect, useState } from "react";
import {
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
import { contentText } from "@/lib/text";

export default function Content() {
  const [activeSection, setActiveSection] = useState("concept");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Set initial active section based on scroll position
    const setInitialActiveSection = () => {
      const sections = document.querySelectorAll(".fade-in-section");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const navbarHeight = 112; // sticky navbar height
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Handle sticky navigation width change
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heroSection = document.querySelector('.vietnam-gradient') as HTMLElement;
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      setIsSticky(scrollTop > heroHeight - 100); // Start transition 100px before hero ends
    };

    // Set initial section on load
    setTimeout(setInitialActiveSection, 100);

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Intersection Observer for scroll animations
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Intersection Observer for navigation highlighting
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            const element = entry.target as Element;
            const sectionId = element.getAttribute('id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { 
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: "-120px 0px -50% 0px" // Account for navbar height
      }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => {
      fadeObserver.observe(section);
      navObserver.observe(section);
    });

    return () => {
      fadeObserver.disconnect();
      navObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen justify-center items-center flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="vietnam-gradient min-w-screen text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="relative mb-6 flex justify-center">
              <Star className="h-16 w-16 animate-pulse-red text-white fill-current" />
              <div className="absolute inset-0 h-16 w-16 text-yellow-300 animate-pulse opacity-50">
                <Star className="h-16 w-16 fill-current" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
              {contentText.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto opacity-90 text-white">
              {contentText.hero.subtitle}
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
      <nav className={`bg-card backdrop-blur-xl border-b sticky top-16 z-40 transition-all duration-500 ease-in-out ${
        isSticky ? 'w-[40%]  rounded-2xl ' : 'w-full'
      } mx-auto`}>
        <div className="container mx-auto px-4 py-4">
          <div className={`flex flex-wrap justify-center gap-4 ${isSticky ? 'text-xs' : 'text-base'}`}>
            <a
              href="#concept"
              className={`transition-all duration-300 px-4 py-2 rounded-lg font-medium ${
                activeSection === "concept"
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "hover:text-primary hover:bg-muted text-muted-foreground"
              }`}
            >
              {contentText.navigation.concept}
            </a>
            <a
              href="#importance"
              className={`transition-all duration-300 px-4 py-2 rounded-lg font-medium ${
                activeSection === "importance"
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "hover:text-primary hover:bg-muted text-muted-foreground"
              }`}
            >
              {contentText.navigation.importance}
            </a>
            <a
              href="#structure"
              className={`transition-all duration-300 px-4 py-2 rounded-lg font-medium ${
                activeSection === "structure"
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "hover:text-primary hover:bg-muted text-muted-foreground"
              }`}
            >
              {contentText.navigation.structure}
            </a>
            <a
              href="#alliance"
              className={`transition-all duration-300 px-4 py-2 rounded-lg font-medium ${
                activeSection === "alliance"
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "hover:text-primary hover:bg-muted text-muted-foreground"
              }`}
            >
              {contentText.navigation.alliance}
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Concept Section */}
        <section id="concept" className="fade-in-section scroll-mt-44">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary star-decoration">
                {contentText.concept.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {contentText.concept.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Crown className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{contentText.concept.political.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {contentText.concept.political.description}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Factory className="h-8 w-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">{contentText.concept.economic.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {contentText.concept.economic.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section id="importance" className="fade-in-section scroll-mt-44">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              {contentText.importance.title}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Award className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                {contentText.importance.leadership.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {contentText.importance.leadership.description}
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Target className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                {contentText.importance.decisive.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {contentText.importance.decisive.description}
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Zap className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-center">
                {contentText.importance.strength.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {contentText.importance.strength.description}
              </p>
            </div>
          </div>
        </section>

        {/* Social Structure Section */}
        <section id="structure" className="fade-in-section scroll-mt-44">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary star-decoration">
              {contentText.structure.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {contentText.structure.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Working Class */}
            <div className="bg-card p-8 rounded-lg border relative overflow-hidden">
              {/* <div className="absolute inset-0 bg-[url('/lienminhchinhtri.jpg')] bg-cover bg-center opacity-20 clip-path-diagonal"></div> */}
              <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Hammer className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">
                {contentText.structure.workingClass.title}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {contentText.structure.workingClass.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                  {point}
                </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Peasant Class */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <Wheat className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-secondary">
                  {contentText.structure.peasantClass.title}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {contentText.structure.peasantClass.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0 fill-current" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Intellectuals */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">
                  {contentText.structure.intellectuals.title}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {contentText.structure.intellectuals.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-4 w-4 text-secondary mt-1 mr-2 flex-shrink-0 fill-current" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Groups */}
            <div className="bg-card p-8 rounded-lg border">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-secondary">
                  {contentText.structure.otherLayers.title}
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {contentText.structure.otherLayers.entrepreneurs.title}
                  </h4>
                  <p className="text-sm">
                    {contentText.structure.otherLayers.entrepreneurs.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {contentText.structure.otherLayers.women.title}
                  </h4>
                  <p className="text-sm">
                    {contentText.structure.otherLayers.women.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {contentText.structure.otherLayers.youth.title}
                  </h4>
                  <p className="text-sm">
                    {contentText.structure.otherLayers.youth.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alliance in Vietnam Section */}
        <section id="alliance" className="fade-in-section scroll-mt-44">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              {contentText.alliance.title}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded"></div>
          </div>

          <div className="space-y-12">
            {/* Economic Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Factory className="h-6 w-6 mr-3" />
                {contentText.alliance.economic.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> {contentText.alliance.economic.objective}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    {contentText.alliance.economic.requirements.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {contentText.alliance.economic.requirements.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  {/* <p className="text-sm text-muted-foreground italic">
                    "{contentText.alliance.economic.quote}"
                  </p> */}
                  <iframe
                    src="https://www.youtube.com/embed/RAUTrTAZkl4?si=zIK2Auq0ugLuC2kz"
                    className="rounded-md shadow-md w-full h-80 mx-auto"
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>

            {/* Political Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                <Shield className="h-6 w-6 mr-3" />
                {contentText.alliance.political.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> {contentText.alliance.political.objective}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    {contentText.alliance.political.requirements.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {contentText.alliance.political.requirements.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  {/* <Image 
                    src={lienminhchinhtri} 
                    alt="Liên Minh Chính Trị" 
                    className="rounded-md shadow-md w-64 h-64 object-cover mx-auto" 
                  /> */}
                  <iframe
                    src="https://www.youtube.com/embed/I9x7tSBR5NI"
                    className="rounded-md shadow-md w-full h-80 mx-auto"
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>

            {/* Cultural-Social Alliance */}
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <BookOpen className="h-6 w-6 mr-3" />
                {contentText.alliance.cultural.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Mục tiêu:</strong> {contentText.alliance.cultural.objective}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    {contentText.alliance.cultural.requirements.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {contentText.alliance.cultural.requirements.points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="flex justify-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  {/* <p className="text-sm text-muted-foreground">
                    {contentText.alliance.cultural.values}
                  </p> */}
                  <iframe
                    src="https://www.youtube.com/embed/2c-sC7ppCZM?si=dezBjHZiGG5p8rZB"
                    className="rounded-md shadow-md w-full h-80 mx-auto"
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="vietnam-gradient min-w-screen text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mb-4 flex justify-center">
            <Star className="h-12 w-12 animate-pulse-red text-white fill-current" />
            <div className="absolute inset-0 h-12 w-12 text-yellow-300 animate-pulse opacity-40">
              <Star className="h-12 w-12 fill-current" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {contentText.footer.title}
          </h3>
          <p className="text-lg opacity-90 mb-6 text-white">
            {contentText.footer.description}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="h-1 w-16 bg-white/80 rounded"></div>
            <div className="h-1 w-8 bg-white rounded"></div>
            <div className="h-1 w-16 bg-white/80 rounded"></div>
          </div>
          <p className="text-sm opacity-75 mt-8 text-white">
            {contentText.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}