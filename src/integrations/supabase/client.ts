// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ahqpioxybjpnjftspzhe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocXBpb3h5YmpwbmpmdHNwemhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNDI4MjAsImV4cCI6MjA1MzkxODgyMH0.p2mVzUQYzQ4Udz2VW28xP62cKtdzlBobmjsMf4E1Xuo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);