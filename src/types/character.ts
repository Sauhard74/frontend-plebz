export interface Character {
  id: number;
  name: string;
  description: string;
  personality: string;
  voice_type: string;
  created_at: string;
  updated_at: string;
  avatar_url?: string;
  view_count?: number;
  creator?: string;
  is_custom?: boolean;
}

export interface CreateCharacterRequest {
  name: string;
  description: string;
  personality: string;
  voice_type: string;
  is_custom?: boolean;
} 