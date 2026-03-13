-- PressKit.ai Database Schema
-- Run this in your Supabase SQL editor

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  name TEXT,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro')),
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Press Releases
CREATE TABLE IF NOT EXISTS press_releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Journalists (curated database)
CREATE TABLE IF NOT EXISTS journalists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  outlet TEXT NOT NULL,
  beat TEXT NOT NULL,
  location TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pitches (sent emails)
CREATE TABLE IF NOT EXISTS pitches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  press_release_id UUID NOT NULL REFERENCES press_releases(id) ON DELETE CASCADE,
  journalist_id UUID NOT NULL REFERENCES journalists(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'opened', 'responded')),
  sent_at TIMESTAMPTZ,
  opened_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE press_releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE pitches ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Press releases policies
CREATE POLICY "Users can view own press releases" ON press_releases
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own press releases" ON press_releases
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own press releases" ON press_releases
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own press releases" ON press_releases
  FOR DELETE USING (auth.uid() = user_id);

-- Pitches policies
CREATE POLICY "Users can view own pitches" ON pitches
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own pitches" ON pitches
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own pitches" ON pitches
  FOR UPDATE USING (auth.uid() = user_id);

-- Journalists are public (read-only for users)
ALTER TABLE journalists ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view journalists" ON journalists
  FOR SELECT USING (true);

-- Indexes for performance
CREATE INDEX idx_press_releases_user_id ON press_releases(user_id);
CREATE INDEX idx_pitches_user_id ON pitches(user_id);
CREATE INDEX idx_pitches_journalist_id ON pitches(journalist_id);
CREATE INDEX idx_journalists_beat ON journalists(beat);
CREATE INDEX idx_journalists_outlet ON journalists(outlet);

-- Insert sample journalists (for demo purposes)
INSERT INTO journalists (name, email, outlet, beat, location, notes) VALUES
('Sarah Johnson', 'sarah@techcrunch.com', 'TechCrunch', 'Technology', 'San Francisco', 'Covers early-stage startups'),
('Mike Chen', 'mike@theverge.com', 'The Verge', 'Technology', 'New York', 'Focus on AI/ML companies'),
('Emily Davis', 'emily@wired.com', 'Wired', 'Technology', 'San Francisco', 'Enterprise tech focus'),
('James Wilson', 'james@forbes.com', 'Forbes', 'Business', 'New York', 'VC and funding coverage'),
('Lisa Park', 'lisa@venturebeat.com', 'VentureBeat', 'AI/ML', 'San Francisco', 'Deep tech expert'),
('David Brown', 'david@businessinsider.com', 'Business Insider', 'Startups', 'New York', 'Startup ecosystem'),
('Anna White', 'anna@fastcompany.com', 'Fast Company', 'Innovation', 'New York', 'Design and innovation'),
('Robert Lee', 'robert@inc.com', 'Inc.', 'Startups', 'New York', 'Founder stories'),
('Jennifer Kim', 'jennifer@entrepreneur.com', 'Entrepreneur', 'Startups', 'Los Angeles', 'Small business focus'),
('Mark Taylor', 'mark@arstechnica.com', 'Ars Technica', 'Technology', 'Boston', 'Deep technical coverage'),
('Rachel Adams', 'rachel@theinformation.com', 'The Information', 'Technology', 'San Francisco', 'Premium tech coverage'),
('Chris Martinez', 'chris@protocol.com', 'Protocol', 'Technology', 'San Francisco', 'Tech industry analysis'),
('Amanda Foster', 'amanda@axios.com', 'Axios', 'Business', 'Washington DC', 'Tech policy and business'),
('Kevin Zhang', 'kevin@restofworld.org', 'Rest of World', 'Technology', 'Global', 'Global tech coverage'),
('Nicole Brown', 'nicole@platformer.news', 'Platformer', 'Technology', 'San Francisco', 'Big tech coverage');