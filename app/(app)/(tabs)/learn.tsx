import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NeuPressable } from '@/components/shared/NeuPressable';
import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CATEGORIES = ['All Topics', 'Nutrition', 'Wellness', 'Labor'];

const ARTICLES = [
  {
    id: '1',
    category: 'NUTRITION',
    title: 'Superfoods for the Second Trimester',
    meta: '8 mins read • By Dr. Sarah Chen',
    emoji: '🥗',
  },
  {
    id: '2',
    category: 'PREPARATION',
    title: 'Essential Hospital Bag Checklist',
    meta: '5 mins read • By Midwife Jo',
    emoji: '🎒',
  },
  {
    id: '3',
    category: 'WELLNESS',
    title: 'Safe Postures for Prenatal Yoga',
    meta: '12 mins read • By Elena R.',
    emoji: '🧘',
  },
  {
    id: '4',
    category: 'NEWBORN',
    title: 'Understanding Sleep Cycles',
    meta: '15 mins read • By Sleep Institute',
    emoji: '💤',
  },
];

/**
 * Learn screen — matches Figma "Learn - V1 (Branded)"
 * Editorial headline, search bar, category chips, featured card, article list
 */
export default function LearnScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState('Nutrition');
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.screen}>
      {/* TopAppBar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 16 }]}>
        <View style={styles.topBarInner}>
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={{ fontSize: 18 }}>🤰</Text>
            </View>
            <Text style={styles.appTitle}>Pregnancy Tracker</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScreenWrapper>
        {/* ── Editorial Headline ── */}
        <View style={styles.headline}>
          <Text style={styles.curatedLabel}>CURATED WISDOM</Text>
          <Text style={styles.heroText}>Knowledge{'\n'}for{'\n'}two souls.</Text>
        </View>

        {/* ── Search Bar ── */}
        <View style={styles.searchBar}>
          <Text style={{ fontSize: 16, color: Colors.textMedium }}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search library..."
            placeholderTextColor={Colors.textPlaceholder}
          />
        </View>

        {/* ── Category Chips ── */}
        <View style={styles.chipsGrid}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, isActive && styles.chipActive]}
                onPress={() => setActiveCategory(cat)}
                activeOpacity={0.8}
              >
                <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ── Featured Article Card ── */}
        <View style={styles.featuredCard}>
          {/* Image area */}
          <View style={styles.featuredImageArea}>
            <Text style={{ fontSize: 80 }}>🤱</Text>
            {/* Gradient overlay — simulated with View */}
            <View style={styles.featuredOverlay} />
            {/* Tag */}
            <View style={styles.featuredTag}>
              <Text style={styles.featuredTagText}>FEATURED GUIDE</Text>
            </View>
            {/* Title + excerpt */}
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>
                The Art of Mindful{'\n'}Breathing during{'\n'}Labor
              </Text>
              <Text style={styles.featuredExcerpt}>
                Mastering the techniques that connect your body and mind for a smoother delivery journey.
              </Text>
            </View>
          </View>
        </View>

        {/* ── Article List ── */}
        <View style={styles.articleList}>
          {ARTICLES.map((article) => (
            <NeuPressable
              key={article.id}
              tint="olive"
              borderRadius={Radius.card}
              style={styles.articleItem}
            >
              {/* Thumbnail */}
              <View style={styles.articleThumb}>
                <Text style={{ fontSize: 40 }}>{article.emoji}</Text>
              </View>
              {/* Content */}
              <View style={styles.articleContent}>
                <Text style={styles.articleCategory}>{article.category}</Text>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleMeta}>{article.meta}</Text>
              </View>
            </NeuPressable>
          ))}
        </View>
      </ScreenWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  topBar: {
    backgroundColor: Colors.bg,
    paddingHorizontal: 24,
    paddingBottom: 16,
    ...NeuShadow.raised,
    zIndex: 10,
  },
  topBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  appTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.h3,
    color: Colors.textNavy,
    letterSpacing: -0.6,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },

  // Headline
  headline: {
    gap: 8,
  },
  curatedLabel: {
    fontFamily: Font.medium,
    fontSize: FontSize.label,
    color: Colors.olive,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  heroText: {
    fontFamily: Font.thin,
    fontSize: FontSize.display,
    lineHeight: 70,
    color: Colors.textDark,
    letterSpacing: -2.8,
  },

  // Search bar
  searchBar: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 0,
    shadowColor: '#1E293B',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontFamily: Font.regular,
    fontSize: FontSize.bodyLg,
    color: Colors.textDark,
    paddingLeft: 16,
    height: '100%',
  },

  // Category chips
  chipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  chip: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: Radius.pill,
    backgroundColor: Colors.bg,
    ...NeuShadow.raised,
  },
  chipActive: {
    backgroundColor: Colors.oliveFaint,
    shadowColor: '#1E293B',
    shadowOpacity: 0.1,
  },
  chipText: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textMedium,
  },
  chipTextActive: {
    fontFamily: Font.semibold,
    color: '#575F40',
  },

  // Featured card
  featuredCard: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    overflow: 'hidden',
    ...NeuShadow.raised,
  },
  featuredImageArea: {
    height: 400,
    backgroundColor: Colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: Radius.image,
    overflow: 'hidden',
    padding: 16,
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 275,
    backgroundColor: 'rgba(240, 242, 245, 0.85)',
  },
  featuredTag: {
    position: 'absolute',
    top: 32,
    left: 32,
    backgroundColor: Colors.olive,
    borderRadius: Radius.pill,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  featuredTagText: {
    fontFamily: Font.bold,
    fontSize: FontSize.label,
    color: '#F4FDD4',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 40,
    left: 32,
    right: 32,
    gap: 8,
  },
  featuredTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.h2,
    lineHeight: 36,
    color: Colors.textDark,
  },
  featuredExcerpt: {
    fontFamily: Font.regular,
    fontSize: FontSize.body,
    lineHeight: 20,
    color: Colors.textMedium,
  },

  // Article list
  articleList: {
    gap: 0,
  },
  articleItem: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
    marginBottom: 20,
    ...NeuShadow.raised,
  },
  articleThumb: {
    width: 96,
    height: 96,
    borderRadius: Radius.image,
    backgroundColor: Colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    shadowColor: '#1E293B',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  articleContent: {
    flex: 1,
    gap: 4,
  },
  articleCategory: {
    fontFamily: Font.bold,
    fontSize: FontSize.label,
    color: Colors.olive,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  articleTitle: {
    fontFamily: Font.semibold,
    fontSize: FontSize.subtitle,
    lineHeight: 25,
    color: Colors.textDark,
  },
  articleMeta: {
    fontFamily: Font.regular,
    fontSize: FontSize.caption,
    lineHeight: 16,
    color: Colors.textMedium,
    marginTop: 8,
  },
});
