import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { HomeHeader } from '@/components/features/home/HomeHeader';
import { WeeklyProgressCard } from '@/components/features/home/WeeklyProgressCard';
import { BabySizeCard } from '@/components/features/home/BabySizeCard';
import { QuickActionsRow } from '@/components/features/home/QuickActionsRow';
import { DailyTipCard } from '@/components/features/home/DailyTipCard';
import { useHome } from '@/hooks/useHome';

/**
 * Home screen — composes feature sections only.
 * All data and logic lives in useHome().
 * All UI lives in src/components/features/home/.
 */
export default function HomeScreen() {
  const {
    greetingName,
    currentWeek,
    daysLeft,
    progressPercent,
    trimester,
    trimesterLabel,
    babySize,
    babySizeName,
    weeklyTip,
  } = useHome();

  return (
    <ScreenWrapper>
      <HomeHeader name={greetingName} />

      <WeeklyProgressCard
        week={currentWeek}
        progressPercent={progressPercent}
        daysLeft={daysLeft}
        trimester={trimester}
        trimesterLabel={trimesterLabel}
      />

      <QuickActionsRow />

      <BabySizeCard
        babySize={babySize}
        babySizeName={babySizeName}
        week={currentWeek}
      />

      <DailyTipCard tip={weeklyTip} />
    </ScreenWrapper>
  );
}
