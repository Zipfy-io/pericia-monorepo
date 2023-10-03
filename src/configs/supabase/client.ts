import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://esmhkztsefypebyqapet.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbWhrenRzZWZ5cGVieXFhcGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDAzOTQsImV4cCI6MjAwOTQ3NjM5NH0.JHNt26E04YAtGE9WkhTnwPFCYXFQfGm84MhodMnnplQ"
);
