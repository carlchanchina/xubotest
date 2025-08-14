import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "地址",
      content: "北京市海淀区中关村科技园区创新大厦8层"
    },
    {
      icon: Phone,
      title: "电话",
      content: "+86 010-8888-8888"
    },
    {
      icon: Mail,
      title: "邮箱",
      content: "info@envtest.com"
    },
    {
      icon: Clock,
      title: "工作时间",
      content: "周一至周五 9:00-18:00"
    }
  ];

  const services = [
    "振动冲击测试",
    "温湿度环境试验",
    "防水防尘检测",
    "高海拔环境模拟",
    "盐雾腐蚀测试",
    "综合环境试验"
  ];

  const resources = [
    "标准解读",
    "技术文档",
    "测试案例",
    "常见问题",
    "下载中心",
    "联系支持"
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">ET</span>
              </div>
              <span className="font-bold text-xl">环境检测技术</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              专业的环境可靠性检测服务提供商，拥有先进的检测设备和专业的技术团队，
              为各行业客户提供全面、可靠的产品环境适应性验证服务。
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">检测服务</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">技术资源</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">联系我们</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-3">
                    <Icon className="h-5 w-5 text-background/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-background/60">{info.title}</div>
                      <div className="text-background">{info.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              需要专业的环境可靠性检测服务？
            </h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              我们的专业团队随时为您提供咨询和检测服务，确保您的产品在各种环境条件下的可靠性
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                立即咨询
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-background/20 text-background hover:bg-background/10"
              >
                获取报价
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 环境检测技术有限公司. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                服务条款
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;