import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { User } from '@/types/auth.types';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  // Actions
  initialize: () => Promise<void>;
  signOut: () => Promise<void>;
  _setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  initialize: async () => {
    set({ isLoading: true });
    const { data } = await supabase.auth.getSession();
    const session = data.session;

    if (session?.user) {
      set({
        user: {
          id: session.user.id,
          email: session.user.email ?? '',
          displayName: session.user.user_metadata?.display_name,
          avatarUrl: session.user.user_metadata?.avatar_url,
          createdAt: session.user.created_at,
        },
        isAuthenticated: true,
      });
    } else {
      set({ user: null, isAuthenticated: false });
    }

    // Listen for auth state changes
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        set({
          user: {
            id: session.user.id,
            email: session.user.email ?? '',
            displayName: session.user.user_metadata?.display_name,
            avatarUrl: session.user.user_metadata?.avatar_url,
            createdAt: session.user.created_at,
          },
          isAuthenticated: true,
        });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    });

    set({ isLoading: false });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false });
  },

  _setUser: (user) => set({ user, isAuthenticated: !!user }),
}));
