import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface BlogCategory {
  id: string;
  name: string;
  count: number;
  color: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  published_date: string;
  read_time: string;
  image_url?: string;
}

export const useBlog = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResult, postsResult] = await Promise.all([
          supabase.from('blog_categories').select('*').order('name'),
          supabase.from('blog_posts').select('*').order('published_date', { ascending: false })
        ]);

        if (categoriesResult.error) throw categoriesResult.error;
        if (postsResult.error) throw postsResult.error;

        setCategories(categoriesResult.data || []);
        setPosts(postsResult.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载博客数据时出错');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, posts, loading, error };
};