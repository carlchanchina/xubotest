import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ServiceCategory {
  id: string;
  name: string;
  count: number;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  icon_name: string;
}

export const useServices = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResult, servicesResult] = await Promise.all([
          supabase.from('service_categories').select('*').order('name'),
          supabase.from('services').select('*').order('title')
        ]);

        if (categoriesResult.error) throw categoriesResult.error;
        if (servicesResult.error) throw servicesResult.error;

        setCategories(categoriesResult.data || []);
        setServices(servicesResult.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载数据时出错');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, services, loading, error };
};