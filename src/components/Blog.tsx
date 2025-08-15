import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import { useState } from "react";
import { useBlog } from "@/hooks/useBlog";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const { categories, posts, loading, error } = useBlog();

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-background">
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
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-xl text-destructive">加载失败: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  const filteredPosts = selectedCategory === "全部" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

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
              variant={selectedCategory === category.name ? "default" : "secondary"}
              className={`px-4 py-2 text-sm font-medium hover:scale-105 transition-all cursor-pointer animate-fade-in ${
                selectedCategory === category.name 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                // 这里可以添加路由跳转到详情页
                console.log('点击了文章:', post.title);
              }}
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
                    {post.read_time}
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
                    <span>{post.published_date}</span>
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