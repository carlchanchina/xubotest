import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Case {
  id: string;
  title: string;
  client: string;
  industry: string;
  icon_name: string;
  description: string;
  test_items: string[];
  duration: string;
  result: string;
  tags: string[];
}

export const useCases = () => {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const { data, error } = await supabase
          .from('cases')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setCases(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载案例数据时出错');
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  return { cases, loading, error };
};