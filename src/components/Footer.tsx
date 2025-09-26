import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/charking-logo.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'القائمة', href: '#menu' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  return (
    <footer className="bg-charcoal border-t border-golden/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="CharKing Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="ml-3 text-3xl font-display font-bold bg-gradient-fire bg-clip-text text-transparent">
                CharKing
              </span>
            </div>
            
            <p className="text-gray-300 font-arabic leading-relaxed mb-6 max-w-md">
              مطعم CharKing للمشاوي الأصيلة، حيث نقدم أجود أنواع المشاوي المحضرة بعناية فائقة على الفحم الطبيعي 
              لنضمن لكم تجربة طعام لا تُنسى.
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-golden/30 text-golden hover:bg-golden hover:text-background p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-golden mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-golden transition-colors duration-200 font-arabic"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold text-golden mb-6">
              معلومات التواصل
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-golden flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+966 11 234 5678</p>
                  <p className="text-gray-400 text-sm">+966 50 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-golden flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@charking.sa</p>
                  <p className="text-gray-400 text-sm">orders@charking.sa</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-arabic font-semibold text-golden mb-3">
                اشترك في النشرة
              </h4>
              <p className="text-sm text-gray-400 font-arabic mb-4">
                احصل على آخر العروض والأخبار
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 px-3 py-2 bg-smoke border border-border rounded-r-lg focus:outline-none focus:border-golden text-sm"
                />
                <Button className="bg-gradient-fire hover:opacity-90 text-white px-4 py-2 rounded-l-lg">
                  اشترك
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-golden/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-arabic text-sm mb-4 md:mb-0">
              © 2024 CharKing. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex space-x-6 rtl:space-x-reverse text-sm">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors font-arabic">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors font-arabic">
                الشروط والأحكام
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors font-arabic">
                سياسة الاسترداد
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;