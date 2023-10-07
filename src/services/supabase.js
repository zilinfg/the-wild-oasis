import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hfgeavpkinhdkouxqaot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZ2VhdnBraW5oZGtvdXhxYW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyMjM2NjUsImV4cCI6MjAxMTc5OTY2NX0.smkgy8dhMY1WYrhcR2rl9bMTGr6PhjeoQy5xNEEKj64";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
