import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import foodPlatter from '@/assets/food-platter.jpg';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'كباب لحم مشكل',
      description: 'كباب لحم ضاني وعجل مشوي على الفحم مع الأرز والسلطة',
      price: '45 ريال',
      image: foodPlatter,
      isNew: true,
      isPopular: false
    },
    {
      id: 2,
      name: 'شيش طاووق',
      description: 'قطع دجاج متبلة ومشوية على الفحم مع الثوم والخضار',
      price: '35 ريال',
      image: foodPlatter,
      isNew: false,
      isPopular: true
    },
    {
      id: 3,
      name: 'لحم مشوي',
      description: 'قطع لحم ضاني طرية مشوية على الفحم مع البرغل',
      price: '50 ريال',
      image: foodPlatter,
      isNew: false,
      isPopular: true
    },
    {
      id: 4,
      name: 'فراخ مشوية',
      description: 'دجاج كامل مشوي على الفحم مع التتبيلة الخاصة',
      price: '40 ريال',
      image: foodPlatter,
      isNew: false,
      isPopular: false
    },
    {
      id: 5,
      name: 'مشاوي مشكلة',
      description: 'طبق مشكل من أفضل المشاوي مع الأرز والسلطات',
      price: '65 ريال',
      image: foodPlatter,
      isNew: true,
      isPopular: true
    },
    {
      id: 6,
      name: 'كفتة مشوية',
      description: 'كفتة لحم مخلوطة بالبقدونس والبصل مشوية على الفحم',
      price: '30 ريال',
      image: foodPlatter,
      isNew: false,
      isPopular: false
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            قائمة الطعام
          </h2>
          <p className="text-xl text-gray-300 font-arabic max-w-2xl mx-auto">
            تشكيلة متنوعة من أشهى المشاوي العربية الأصيلة المحضرة بعناية فائقة
          </p>
          <div className="w-24 h-1 bg-gradient-golden mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group bg-card/50 backdrop-blur-sm border-border hover:border-golden/50 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isNew && (
                    <Badge className="bg-fire-orange text-white font-arabic">
                      جديد
                    </Badge>
                  )}
                  {item.isPopular && (
                    <Badge className="bg-golden text-background font-arabic">
                      الأكثر طلباً
                    </Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-arabic font-bold text-card-foreground group-hover:text-golden transition-colors">
                    {item.name}
                  </CardTitle>
                  <span className="text-2xl font-display font-bold text-fire-orange">
                    {item.price}
                  </span>
                </div>
                <CardDescription className="font-arabic text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-gradient-fire hover:opacity-90 text-white font-arabic font-semibold group-hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  أضف للسلة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-golden hover:bg-golden/90 text-background font-arabic font-bold text-xl px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            عرض القائمة الكاملة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;