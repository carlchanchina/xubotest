-- 修复函数安全路径问题
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER 
SET search_path = public
LANGUAGE plpgsql 
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;