import { createClient } from '@supabase/supabase-js'

// 关键逻辑：利用环境变量创建全局唯一的数据库连接实例
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)