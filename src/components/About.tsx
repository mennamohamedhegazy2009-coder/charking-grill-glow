import { Award, Clock, Users, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: '20+',
      label: 'سنة خبرة',
      description: 'في فن الشواء الأصيل'
    },
    {
      icon: Users,
      number: '50K+',
      label: 'عميل سعيد',
      description: 'يثق في جودتنا'
    },
    {
      icon: Award,
      number: '15+',
      label: 'جائزة',
      description: 'في الطبخ والجودة'
    },
    {
      icon: Flame,
      number: '100%',
      label: 'فحم طبيعي',
      description: 'للطعم الأصيل'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              قصة 
              <span className="bg-gradient-fire bg-clip-text text-transparent block">
                CharKing
              </span>
            </h2>
            
            <div className="space-y-6 text-lg font-arabic leading-relaxed text-muted-foreground">
              <p>
                بدأت رحلتنا منذ أكثر من عقدين من الزمن برغبة صادقة في تقديم أجود أنواع المشاوي العربية الأصيلة. 
                نحن لا نقدم مجرد طعام، بل نقدم تجربة طعام لا تُنسى تجمع بين الأصالة والجودة.
              </p>
              
              <p>
                في CharKing، نؤمن بأن سر المشاوي المميزة يكمن في ثلاثة عناصر: اللحوم المختارة بعناية، 
                الفحم الطبيعي الأصيل، والخبرة العريقة في فن الشواء. كل طبق نقدمه هو نتاج هذه الفلسفة.
              </p>

              <p>
                فريقنا من الطهاة المهرة يعمل بشغف لضمان أن كل قطعة لحم تصل إلى طاولتكم مشوية إلى درجة الكمال، 
                محتفظة بعصارتها الطبيعية ونكهتها الغنية التي تذوب في الفم.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-charcoal to-smoke rounded-xl border border-golden/20">
              <blockquote className="text-golden font-arabic text-xl italic text-center">
                "رؤيتنا أن نكون الوجهة الأولى لمحبي المشاوي الأصيلة في المنطقة"
              </blockquote>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-golden/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-fire rounded-full group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-3xl font-display font-bold text-golden mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-foreground font-arabic font-semibold mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-muted-foreground font-arabic">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-charcoal via-smoke to-charcoal rounded-2xl p-8 border border-golden/30">
            <h3 className="text-3xl font-display font-bold text-golden mb-4">
              مهمتنا
            </h3>
            <p className="text-xl font-arabic leading-relaxed text-gray-300">
              نسعى لتقديم تجربة طعام استثنائية تجمع بين الطعم الأصيل والخدمة المتميزة والأجواء الدافئة، 
              لنكون جزءاً من ذكرياتكم الجميلة مع الأهل والأصدقاء حول مائدة المشاوي الشهية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;