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

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  
  const serviceCategories = [
    { name: "全部", count: 8 },
    { name: "环境试验", count: 4 },
    { name: "机械试验", count: 2 },
    { name: "综合试验", count: 2 }
  ];
  const services = [
    {
      icon: Zap,
      title: "振动冲击测试",
      description: "模拟运输、使用过程中的振动冲击环境，验证产品结构强度和可靠性",
      features: ["随机振动", "正弦振动", "冲击试验", "跌落测试"],
      category: "机械试验"
    },
    {
      icon: Thermometer,
      title: "温度环境试验",
      description: "在极端温度条件下测试产品性能，确保在各种气候环境下正常工作",
      features: ["高温试验", "低温试验", "温度循环", "热冲击试验"],
      category: "环境试验"
    },
    {
      icon: Droplets,
      title: "湿度环境试验",
      description: "模拟不同湿度环境对产品的影响，验证防潮性能和材料稳定性",
      features: ["恒定湿热", "交变湿热", "凝露试验", "盐雾腐蚀"],
      category: "环境试验"
    },
    {
      icon: Mountain,
      title: "高度环境模拟",
      description: "模拟高海拔低气压环境，测试产品在不同大气压力下的性能表现",
      features: ["低气压试验", "快速减压", "高度模拟", "气压循环"],
      category: "环境试验"
    },
    {
      icon: Shield,
      title: "防水防尘测试",
      description: "按照IP等级标准进行防护性能测试，确保产品密封性和防护能力",
      features: ["IPX防水等级", "IP防尘等级", "密封性检测", "浸水试验"],
      category: "环境试验"
    },
    {
      icon: Wind,
      title: "沙尘环境试验",
      description: "模拟沙尘暴等恶劣环境，测试产品在沙尘环境下的工作性能",
      features: ["沙尘试验", "粉尘试验", "颗粒物测试", "密封性验证"],
      category: "机械试验"
    },
    {
      icon: Settings,
      title: "综合环境试验",
      description: "多因子综合环境测试，模拟真实使用环境的复杂条件",
      features: ["温湿度振动", "综合应力", "加速老化", "寿命评估"],
      category: "综合试验"
    },
    {
      icon: Gauge,
      title: "可靠性评估",
      description: "通过专业的可靠性测试和分析，为产品质量提供科学依据",
      features: ["MTBF评估", "故障分析", "寿命预测", "质量改进"],
      category: "综合试验"
    }
  ];

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
          {serviceCategories.map((category, index) => (
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
            const Icon = service.icon;
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