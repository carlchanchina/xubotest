import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Smartphone, Car, Plane, ArrowRight } from "lucide-react";
import { useCases } from "@/hooks/useCases";

const Cases = () => {
  const { cases, loading, error } = useCases();

  if (loading) {
    return (
      <section id="cases" className="py-20 bg-gradient-card">
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
      <section id="cases" className="py-20 bg-gradient-card">
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
    Building2,
    Smartphone,
    Car,
    Plane
  };

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
            const Icon = iconMap[caseItem.icon_name] || Building2;
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
                        {caseItem.test_items.map((item) => (
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