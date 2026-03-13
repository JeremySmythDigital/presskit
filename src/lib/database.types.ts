export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          plan: 'free' | 'pro'
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          plan?: 'free' | 'pro'
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          plan?: 'free' | 'pro'
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      press_releases: {
        Row: {
          id: string
          user_id: string
          title: string
          content: string
          status: 'draft' | 'published'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          content: string
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          content?: string
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
      }
      journalists: {
        Row: {
          id: string
          name: string
          email: string
          outlet: string
          beat: string
          location: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          outlet: string
          beat: string
          location: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          outlet?: string
          beat?: string
          location?: string
          notes?: string | null
          created_at?: string
        }
      }
      pitches: {
        Row: {
          id: string
          user_id: string
          press_release_id: string
          journalist_id: string
          subject: string
          body: string
          status: 'pending' | 'sent' | 'opened' | 'responded'
          sent_at: string | null
          opened_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          press_release_id: string
          journalist_id: string
          subject: string
          body: string
          status?: 'pending' | 'sent' | 'opened' | 'responded'
          sent_at?: string | null
          opened_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          press_release_id?: string
          journalist_id?: string
          subject?: string
          body?: string
          status?: 'pending' | 'sent' | 'opened' | 'responded'
          sent_at?: string | null
          opened_at?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}