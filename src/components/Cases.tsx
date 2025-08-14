import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Smartphone, Car, Plane, ArrowRight } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "华为5G基站设备环境可靠性测试",
      client: "华为技术有限公司",
      industry: "通信设备",
      icon: Building2,
      description: "对华为5G基站设备进行全面的环境可靠性测试，包括高低温、湿热、振动、冲击等多项测试，确保设备在各种恶劣环境下的稳定运行。",
      testItems: ["温度循环测试", "湿热交变测试", "振动试验", "冲击试验", "防尘防水测试"],
      duration: "45天",
      result: "通过所有测试项目，产品可靠性达到设计要求",
      tags: ["通信", "5G", "基站"]
    },
    {
      id: 2,
      title: "小米手机防水性能IP68认证测试",
      client: "小米科技有限公司",
      industry: "消费电子",
      icon: Smartphone,
      description: "为小米最新款智能手机进行IP68防护等级认证测试，验证产品在水下1.5米深度30分钟的防水性能。",
      testItems: ["IPX8浸水试验", "IP6X防尘试验", "密封性检测", "功能性测试"],
      duration: "15天",
      result: "成功通过IP68认证，获得国际认证证书",
      tags: ["手机", "防水", "IP68"]
    },
    {
      id: 3,
      title: "比亚迪车载电子系统环境适应性测试",
      client: "比亚迪股份有限公司",
      industry: "汽车电子",
      icon: Car,
      description: "对比亚迪新能源汽车的车载娱乐系统进行环境适应性测试，模拟车辆在不同气候和路况下的使用环境。",
      testItems: ["汽车电子振动试验", "高低温存储", "温度冲击", "盐雾腐蚀", "EMC电磁兼容"],
      duration: "60天",
      result: "产品性能稳定，满足汽车行业标准要求",
      tags: ["汽车", "车载", "新能源"]
    },
    {
      id: 4,
      title: "中航工业航空电子设备高海拔测试",
      client: "中国航空工业集团",
      industry: "航空航天",
      icon: Plane,
      description: "为航空电子导航设备进行高海拔环境模拟测试，验证设备在高空低压环境下的性能表现。",
      testItems: ["低气压试验", "快速减压测试", "高海拔温度循环", "辐射耐受测试"],
      duration: "90天",
      result: "设备在模拟20000米高空环境下正常工作",
      tags: ["航空", "导航", "高海拔"]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            成功案例
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            与知名企业合作，为各行业产品提供专业的环境可靠性检测服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card
                key={caseItem.id}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {caseItem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{caseItem.client}</span>
                        <span className="mx-2">•</span>
                        <span>{caseItem.industry}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {caseItem.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">测试项目</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {caseItem.testItems.map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">测试周期</h4>
                        <p className="text-muted-foreground">{caseItem.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">测试结果</h4>
                        <p className="text-secondary font-medium">{caseItem.result}</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    查看详细报告
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8">
            查看更多案例
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;