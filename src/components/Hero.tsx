import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  const capabilities = [
    "振动冲击测试",
    "温湿度环境试验",
    "防水防尘检测",
    "高海拔环境模拟"
  ];

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                专业环境
                <span className="text-transparent bg-gradient-primary bg-clip-text">
                  可靠性检测
                </span>
                服务
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                提供全方位的环境可靠性检测服务，包括振动、冲击、温湿度、防水防尘等专业测试，
                确保您的产品在各种环境条件下的可靠性和稳定性。
              </p>
            </div>

            {/* Capabilities List */}
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{capability}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                立即咨询
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                了解服务
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="专业环境检测实验室"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;