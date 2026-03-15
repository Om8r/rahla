import { Redirect } from 'expo-router';
import { useAuthStore } from '@/stores/auth.store';

/**
 * Root index — redirect based on auth state.
 * isLoading is handled by the root layout (splash screen stays up).
 */
export default function Index() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return <Redirect href={isAuthenticated ? '/(app)/(tabs)/home' : '/(auth)/welcome'} />;
}
