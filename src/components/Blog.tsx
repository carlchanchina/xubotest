import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "标准解读", count: 12, color: "bg-primary" },
    { name: "试验能力", count: 8, color: "bg-secondary" },
    { name: "技术分享", count: 15, color: "bg-accent" },
    { name: "案例分析", count: 6, color: "bg-muted" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "GB/T 2423.1-2008低温试验标准解读",
      excerpt: "详细解读国标GB/T 2423.1-2008环境试验低温试验方法的技术要求、试验程序和判定标准...",
      category: "标准解读",
      author: "张工程师",
      date: "2024-01-15",
      readTime: "5分钟",
      image: "/api/placeholder/400/240"
    },
    {
      id: 2,
      title: "振动试验台选型与配置指南",
      excerpt: "从试验需求出发，介绍如何选择合适的振动试验设备，包括载荷、频率范围、控制精度等关键参数...",
      category: "试验能力",
      author: "李技术员",
      date: "2024-01-12",
      readTime: "8分钟",
      image: "/api/placeholder/400/240"
    },
    {
      id: 3,
      title: "IP67防护等级测试实践经验",
      excerpt: "分享IP67防护等级测试的实际操作经验，包括测试设备选择、试验条件设置和常见问题解决...",
      category: "技术分享",
      author: "王主管",
      date: "2024-01-10",
      readTime: "6分钟",
      image: "/api/placeholder/400/240"
    },
    {
      id: 4,
      title: "汽车电子产品环境可靠性测试案例",
      excerpt: "以某车载导航设备为例，详细介绍从温度循环到振动冲击的全套环境可靠性测试流程和结果分析...",
      category: "案例分析",
      author: "陈专家",
      date: "2024-01-08",
      readTime: "10分钟",
      image: "/api/placeholder/400/240"
    },
    {
      id: 5,
      title: "盐雾腐蚀试验标准对比分析",
      excerpt: "对比分析GB/T 10125、ASTM B117、ISO 9227等盐雾腐蚀试验标准的异同点和应用场景...",
      category: "标准解读",
      author: "刘博士",
      date: "2024-01-05",
      readTime: "7分钟",
      image: "/api/placeholder/400/240"
    },
    {
      id: 6,
      title: "环境试验箱温度均匀性校准方法",
      excerpt: "介绍环境试验箱温度均匀性的校准方法、测点布置原则和数据处理技巧，确保试验结果的准确性...",
      category: "技术分享",
      author: "赵工程师",
      date: "2024-01-03",
      readTime: "9分钟",
      image: "/api/placeholder/400/240"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            技术博客
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            分享环境可靠性检测的专业知识、标准解读、技术经验和实际案例
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category, index) => (
            <Badge
              key={category.name}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-primary rounded-t-lg mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">图片占位</span>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            加载更多文章
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;