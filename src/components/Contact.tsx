import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: '+966 11 234 5678',
      subDetails: '+966 50 123 4567'
    },
    {
      icon: MapPin,
      title: 'موقعنا',
      details: 'شارع الملك فهد، الرياض',
      subDetails: 'المملكة العربية السعودية'
    },
    {
      icon: Clock,
      title: 'أوقات العمل',
      details: 'يومياً: 12:00 ظ - 2:00 ص',
      subDetails: 'الجمعة: 2:00 ظ - 2:00 ص'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: 'info@charking.sa',
      subDetails: 'orders@charking.sa'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-smoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-300 font-arabic max-w-2xl mx-auto">
            نحن هنا لخدمتكم في أي وقت. تواصلوا معنا لأي استفسار أو لحجز طاولة
          </p>
          <div className="w-24 h-1 bg-gradient-golden mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-golden mb-6">
                معلومات التواصل
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-golden/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-gradient-fire rounded-full group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-golden mb-1 font-arabic">
                            {info.title}
                          </h4>
                          <p className="text-sm text-card-foreground font-arabic">
                            {info.details}
                          </p>
                          <p className="text-xs text-muted-foreground font-arabic">
                            {info.subDetails}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-golden/20">
              <h3 className="text-xl font-display font-bold text-golden mb-4">
                احجز طاولتك الآن
              </h3>
              <p className="text-muted-foreground font-arabic mb-6">
                استمتع بتجربة طعام لا تُنسى في أجواء مريحة ودافئة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-fire hover:opacity-90 text-white font-arabic font-semibold">
                  احجز طاولة
                </Button>
                <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-background font-arabic">
                  اطلب توصيل
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-bold text-golden">
                أرسل رسالة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2 font-arabic">
                    الاسم
                  </label>
                  <Input 
                    placeholder="اسمك الكريم"
                    className="bg-background/50 border-border focus:border-golden font-arabic"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2 font-arabic">
                    رقم الهاتف
                  </label>
                  <Input 
                    placeholder="رقم الهاتف"
                    className="bg-background/50 border-border focus:border-golden"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2 font-arabic">
                  البريد الإلكتروني
                </label>
                <Input 
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="bg-background/50 border-border focus:border-golden"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2 font-arabic">
                  الرسالة
                </label>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-golden font-arabic resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-fire hover:opacity-90 text-white font-arabic font-semibold text-lg py-3">
                إرسال الرسالة
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-charcoal to-smoke flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-golden mx-auto mb-4" />
                <h4 className="text-xl font-display font-bold text-golden mb-2">
                  موقعنا على الخريطة
                </h4>
                <p className="text-gray-300 font-arabic">
                  شارع الملك فهد، الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;