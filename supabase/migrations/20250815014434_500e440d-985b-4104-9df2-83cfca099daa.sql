-- 创建服务分类表
CREATE TABLE public.service_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 创建检测服务表
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 创建案例表
CREATE TABLE public.cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  industry TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  description TEXT NOT NULL,
  test_items TEXT[] NOT NULL DEFAULT '{}',
  duration TEXT NOT NULL,
  result TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 创建博客分类表
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  count INTEGER NOT NULL DEFAULT 0,
  color TEXT NOT NULL DEFAULT 'bg-primary',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 创建博客文章表
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  published_date DATE NOT NULL,
  read_time TEXT NOT NULL,
  image_url TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 启用RLS
ALTER TABLE public.service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 创建公开读取策略（因为这是展示网站的公开内容）
CREATE POLICY "Allow public read access to service_categories" ON public.service_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read access to cases" ON public.cases FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog_categories" ON public.blog_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog_posts" ON public.blog_posts FOR SELECT USING (true);

-- 插入服务分类数据
INSERT INTO public.service_categories (name, count) VALUES
('全部', 8),
('环境试验', 4),
('机械试验', 2),
('综合试验', 2);

-- 插入检测服务数据
INSERT INTO public.services (title, description, features, category, icon_name) VALUES
('振动冲击测试', '模拟运输、使用过程中的振动冲击环境，验证产品结构强度和可靠性', ARRAY['随机振动', '正弦振动', '冲击试验', '跌落测试'], '机械试验', 'Zap'),
('温度环境试验', '在极端温度条件下测试产品性能，确保在各种气候环境下正常工作', ARRAY['高温试验', '低温试验', '温度循环', '热冲击试验'], '环境试验', 'Thermometer'),
('湿度环境试验', '模拟不同湿度环境对产品的影响，验证防潮性能和材料稳定性', ARRAY['恒定湿热', '交变湿热', '凝露试验', '盐雾腐蚀'], '环境试验', 'Droplets'),
('高度环境模拟', '模拟高海拔低气压环境，测试产品在不同大气压力下的性能表现', ARRAY['低气压试验', '快速减压', '高度模拟', '气压循环'], '环境试验', 'Mountain'),
('防水防尘测试', '按照IP等级标准进行防护性能测试，确保产品密封性和防护能力', ARRAY['IPX防水等级', 'IP防尘等级', '密封性检测', '浸水试验'], '环境试验', 'Shield'),
('沙尘环境试验', '模拟沙尘暴等恶劣环境，测试产品在沙尘环境下的工作性能', ARRAY['沙尘试验', '粉尘试验', '颗粒物测试', '密封性验证'], '机械试验', 'Wind'),
('综合环境试验', '多因子综合环境测试，模拟真实使用环境的复杂条件', ARRAY['温湿度振动', '综合应力', '加速老化', '寿命评估'], '综合试验', 'Settings'),
('可靠性评估', '通过专业的可靠性测试和分析，为产品质量提供科学依据', ARRAY['MTBF评估', '故障分析', '寿命预测', '质量改进'], '综合试验', 'Gauge');

-- 插入案例数据
INSERT INTO public.cases (title, client, industry, icon_name, description, test_items, duration, result, tags) VALUES
('华为5G基站设备环境可靠性测试', '华为技术有限公司', '通信设备', 'Building2', '对华为5G基站设备进行全面的环境可靠性测试，包括高低温、湿热、振动、冲击等多项测试，确保设备在各种恶劣环境下的稳定运行。', ARRAY['温度循环测试', '湿热交变测试', '振动试验', '冲击试验', '防尘防水测试'], '45天', '通过所有测试项目，产品可靠性达到设计要求', ARRAY['通信', '5G', '基站']),
('小米手机防水性能IP68认证测试', '小米科技有限公司', '消费电子', 'Smartphone', '为小米最新款智能手机进行IP68防护等级认证测试，验证产品在水下1.5米深度30分钟的防水性能。', ARRAY['IPX8浸水试验', 'IP6X防尘试验', '密封性检测', '功能性测试'], '15天', '成功通过IP68认证，获得国际认证证书', ARRAY['手机', '防水', 'IP68']),
('比亚迪车载电子系统环境适应性测试', '比亚迪股份有限公司', '汽车电子', 'Car', '对比亚迪新能源汽车的车载娱乐系统进行环境适应性测试，模拟车辆在不同气候和路况下的使用环境。', ARRAY['汽车电子振动试验', '高低温存储', '温度冲击', '盐雾腐蚀', 'EMC电磁兼容'], '60天', '产品性能稳定，满足汽车行业标准要求', ARRAY['汽车', '车载', '新能源']),
('中航工业航空电子设备高海拔测试', '中国航空工业集团', '航空航天', 'Plane', '为航空电子导航设备进行高海拔环境模拟测试，验证设备在高空低压环境下的性能表现。', ARRAY['低气压试验', '快速减压测试', '高海拔温度循环', '辐射耐受测试'], '90天', '设备在模拟20000米高空环境下正常工作', ARRAY['航空', '导航', '高海拔']);

-- 插入博客分类数据
INSERT INTO public.blog_categories (name, count, color) VALUES
('全部', 41, 'bg-primary'),
('标准解读', 12, 'bg-primary'),
('试验能力', 8, 'bg-secondary'),
('技术分享', 15, 'bg-accent'),
('案例分析', 6, 'bg-muted');

-- 插入博客文章数据
INSERT INTO public.blog_posts (title, excerpt, category, author, published_date, read_time, image_url) VALUES
('GB/T 2423.1-2008低温试验标准解读', '详细解读国标GB/T 2423.1-2008环境试验低温试验方法的技术要求、试验程序和判定标准...', '标准解读', '张工程师', '2024-01-15', '5分钟', '/api/placeholder/400/240'),
('振动试验台选型与配置指南', '从试验需求出发，介绍如何选择合适的振动试验设备，包括载荷、频率范围、控制精度等关键参数...', '试验能力', '李技术员', '2024-01-12', '8分钟', '/api/placeholder/400/240'),
('IP67防护等级测试实践经验', '分享IP67防护等级测试的实际操作经验，包括测试设备选择、试验条件设置和常见问题解决...', '技术分享', '王主管', '2024-01-10', '6分钟', '/api/placeholder/400/240'),
('汽车电子产品环境可靠性测试案例', '以某车载导航设备为例，详细介绍从温度循环到振动冲击的全套环境可靠性测试流程和结果分析...', '案例分析', '陈专家', '2024-01-08', '10分钟', '/api/placeholder/400/240'),
('盐雾腐蚀试验标准对比分析', '对比分析GB/T 10125、ASTM B117、ISO 9227等盐雾腐蚀试验标准的异同点和应用场景...', '标准解读', '刘博士', '2024-01-05', '7分钟', '/api/placeholder/400/240'),
('环境试验箱温度均匀性校准方法', '介绍环境试验箱温度均匀性的校准方法、测点布置原则和数据处理技巧，确保试验结果的准确性...', '技术分享', '赵工程师', '2024-01-03', '9分钟', '/api/placeholder/400/240');

-- 创建更新时间戳的函数
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 为所有表创建更新时间戳的触发器
CREATE TRIGGER update_service_categories_updated_at BEFORE UPDATE ON public.service_categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_cases_updated_at BEFORE UPDATE ON public.cases FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_categories_updated_at BEFORE UPDATE ON public.blog_categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();