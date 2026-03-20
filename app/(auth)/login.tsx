import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';

/**
 * Login screen — matches Figma "Login - V1 (Branded)"
 * Neumorphic design: inset inputs, raised buttons, flat background
 */
export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── Logo + App name ── */}
          <View style={styles.header}>
            <View style={styles.logoCircle}>
              <Text style={{ fontSize: 36 }}>🤰</Text>
            </View>

            <View style={styles.brandGroup}>
              <Text style={styles.appName}>Doula</Text>
              <Text style={styles.tagline}>Enter your space of calm</Text>
            </View>
          </View>

          {/* ── Form ── */}
          <View style={styles.form}>
            {/* Email */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.input}
                  placeholder="name@sanctuary.com"
                  placeholderTextColor={Colors.textPlaceholder}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor={Colors.textPlaceholder}
                  secureTextEntry
                  autoComplete="current-password"
                />
              </View>
              {/* Forgot password */}
              <View style={styles.forgotRow}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign In button */}
            <TouchableOpacity
              style={styles.signInBtn}
              activeOpacity={0.8}
              onPress={() => router.replace('/(app)/(tabs)/home')}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* ── Divider ── */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR JOIN US</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* ── Social buttons ── */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <Text style={{ fontSize: 18 }}>G</Text>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <Text style={{ fontSize: 16 }}>🍎</Text>
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* ── Secure badge ── */}
          <View style={styles.secureBadge}>
            <Text style={{ fontSize: 10 }}>🔒</Text>
            <Text style={styles.secureText}>SECURE{'\n'}SANCTUARY{'\n'}ACCESS</Text>
          </View>

          {/* ── Footer link ── */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/(auth)/register')}
          >
            <Text style={styles.footerLink}>
              New to the Sanctuary?{' '}
              <Text style={styles.footerLinkBold}>Create account</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 40,
    gap: 0,
  },

  // ── Header ──
  header: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 48,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  brandGroup: {
    alignItems: 'center',
    gap: 8,
  },
  appName: {
    fontFamily: Font.bold,
    fontSize: FontSize.display,
    color: Colors.pink,
    letterSpacing: -2,
  },
  tagline: {
    fontFamily: Font.regular,
    fontSize: FontSize.body,
    color: Colors.textMedium,
    letterSpacing: 0.35,
  },

  // ── Form ──
  form: {
    width: '100%',
    gap: 24,
    marginBottom: 32,
  },
  fieldGroup: {
    gap: 12,
  },
  label: {
    fontFamily: Font.medium,
    fontSize: FontSize.caption,
    color: Colors.textMedium,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingHorizontal: 24,
  },
  inputWrap: {
    backgroundColor: Colors.bgInput,
    borderRadius: Radius.pill,
    height: 63,
    paddingHorizontal: 32,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  input: {
    fontFamily: Font.regular,
    fontSize: FontSize.bodyLg,
    color: Colors.textDark,
    height: '100%',
  },
  forgotRow: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  forgotText: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textMedium,
  },
  signInBtn: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
    marginTop: 8,
  },
  signInText: {
    fontFamily: Font.semibold,
    fontSize: FontSize.bodyLg,
    color: Colors.textDark,
    letterSpacing: 0.4,
  },

  // ── Divider ──
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider,
  },
  dividerText: {
    fontFamily: Font.regular,
    fontSize: FontSize.caption,
    color: Colors.textPlaceholder,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  // ── Social ──
  socialRow: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    marginBottom: 24,
  },
  socialBtn: {
    flex: 1,
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    ...NeuShadow.raised,
  },
  socialText: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textDark,
  },

  // ── Secure badge ──
  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: Radius.pill,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
    ...NeuShadow.raised,
  },
  secureText: {
    fontFamily: Font.medium,
    fontSize: FontSize.label,
    color: Colors.textMedium,
    letterSpacing: 2,
    textTransform: 'uppercase',
    lineHeight: 15,
  },

  // ── Footer ──
  footerLink: {
    fontFamily: Font.regular,
    fontSize: FontSize.body,
    color: Colors.textMedium,
    textAlign: 'center',
  },
  footerLinkBold: {
    fontFamily: Font.semibold,
    color: Colors.textDark,
  },
});
