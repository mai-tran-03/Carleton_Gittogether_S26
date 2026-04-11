import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fbcrlemtfzhznxrmliwq.supabase.co";
const supabaseAnonKey = "sb_publishable_NYrVS8E3Zj-EAH6myL6e3A_vp38eihN";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);