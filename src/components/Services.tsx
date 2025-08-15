import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Thermometer, 
  Droplets, 
  Mountain, 
  Shield, 
  Wind,
  Settings,
  Gauge
} from "lucide-react";
import { useState } from "react";
import { useServices } from "@/hooks/useServices";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const { categories, services, loading, error } = useServices();

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-muted-foreground">加载中...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-destructive">加载失败: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  // Icon mapping
  const iconMap: Record<string, any> = {
    Zap,
    Thermometer,
    Droplets,
    Mountain,
    Shield,
    Wind,
    Settings,
    Gauge
  };

  const filteredServices = selectedCategory === "全部" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            检测服务能力
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            拥有完善的环境可靠性检测设备和专业技术团队，为各行业客户提供全面的产品环境适应性验证服务
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category, index) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "secondary"}
              className="px-4 py-2 text-sm font-medium hover:scale-105 transition-all cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.icon_name] || Settings;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up border-border bg-card cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  // 这里可以添加路由跳转到详情页
                  console.log('点击了服务:', service.title);
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;