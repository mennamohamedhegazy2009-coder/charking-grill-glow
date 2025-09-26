import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';
import heroImage from '@/assets/hero-grilling.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-fire rounded-full shadow-2xl">
              <Flame className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
            <span className="block font-arabic">مطعم</span>
            <span className="block bg-gradient-golden bg-clip-text text-transparent">
              CharKing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-arabic leading-relaxed max-w-2xl mx-auto">
            أصل المشاوي العربية الأصيلة والطعم الذي لا يُنسى
            <br />
            <span className="text-golden font-semibold">مع نكهة الفحم الحقيقي</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-fire hover:opacity-90 text-white font-arabic font-bold text-xl px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              استكشف القائمة
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-background font-arabic font-bold text-xl px-8 py-4 rounded-full backdrop-blur-sm bg-black/20"
            >
              اطلب الآن
            </Button>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-golden/20">
              <h3 className="text-golden font-display font-bold text-xl mb-2">
                فحم أصيل
              </h3>
              <p className="text-gray-300 font-arabic">
                نستخدم الفحم الطبيعي لطعم مميز
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-golden/20">
              <h3 className="text-golden font-display font-bold text-xl mb-2">
                لحوم مختارة
              </h3>
              <p className="text-gray-300 font-arabic">
                أجود أنواع اللحوم الطازجة يومياً
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-golden/20">
              <h3 className="text-golden font-display font-bold text-xl mb-2">
                خبرة عريقة  
              </h3>
              <p className="text-gray-300 font-arabic">
                أكثر من ٢٠ عاماً في فن الشواء
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;