/**
 * Weekly pregnancy tips — indexed by week number.
 * Each entry has Arabic and English versions.
 */
export interface WeeklyTip {
  ar: string;
  en: string;
}

export const WEEKLY_TIPS: Record<number, WeeklyTip> = {
  4:  { ar: 'ابدئي بتناول حمض الفوليك يومياً لدعم نمو الجهاز العصبي لطفلك.', en: 'Start taking folic acid daily to support your baby\'s neural development.' },
  5:  { ar: 'قد تشعرين ببعض الإجهاد — هذا طبيعي تماماً. احرصي على الراحة الكافية.', en: 'You may feel fatigued — this is completely normal. Make sure to rest well.' },
  6:  { ar: 'الغثيان الصباحي يبدأ الآن لدى كثيرات. تناولي وجبات صغيرة متكررة.', en: 'Morning sickness may begin now. Try eating small, frequent meals.' },
  7:  { ar: 'قلب طفلك بدأ يدق الآن! احرصي على شرب الماء الكافي يومياً.', en: "Your baby's heart has started beating! Stay well hydrated throughout the day." },
  8:  { ar: 'تجنبي الأجبان غير المبسترة والأسماك ذات الزئبق العالي.', en: 'Avoid unpasteurized cheeses and high-mercury fish.' },
  9:  { ar: 'قد تلاحظين زيادة في التبول — هذا طبيعي بسبب ضغط الرحم على المثانة.', en: 'Increased urination is normal due to your growing uterus.' },
  10: { ar: 'أصابع طفلك تتشكل الآن. تجنبي الإجهاد وحافظي على نومك.', en: "Your baby's fingers are forming. Avoid stress and maintain good sleep." },
  11: { ar: 'يمكنك الآن سماع قلب طفلك بجهاز الدوبلر عند طبيبتك.', en: "You may be able to hear your baby's heartbeat via Doppler now." },
  12: { ar: 'أنتِ في نهاية الثلث الأول! خطر الإجهاض ينخفض بشكل ملحوظ.', en: "You're nearing the end of the first trimester! Miscarriage risk drops significantly." },
  13: { ar: 'طفلك يستطيع الآن البصم بإبهامه. ابدئي بممارسة اليوغا الخاصة بالحامل.', en: 'Your baby can suck their thumb now. Consider starting prenatal yoga.' },
  14: { ar: 'مرحباً بالثلث الثاني! قد تشعرين بتحسن كبير في طاقتك.', en: 'Welcome to the second trimester! You may feel a significant energy boost.' },
  15: { ar: 'ابدئي بالنوم على جانبك الأيسر لتحسين الدورة الدموية لطفلك.', en: 'Start sleeping on your left side to improve blood flow to your baby.' },
  16: { ar: 'قد تشعرين بأولى حركات طفلك قريباً — فراشات صغيرة في بطنك.', en: "You may feel baby's first movements soon — like tiny butterflies in your belly." },
  17: { ar: 'حافظي على أوميغا-3 في نظامك الغذائي لتطور دماغ طفلك.', en: "Maintain omega-3 in your diet to support your baby's brain development." },
  18: { ar: 'الفحص التشريحي في الأسبوع 18-20 يكشف عن جنس طفلك إن أردتِ.', en: 'The anatomy scan at weeks 18-20 can reveal your baby\'s sex if you want.' },
  19: { ar: 'بطنك تكبر الآن — كريم الترطيب يساعد على تقليل علامات التمدد.', en: 'Your bump is growing — moisturizer helps reduce stretch marks.' },
  20: { ar: 'نصف الرحلة! طفلك يسمع صوتك الآن — تحدثي إليه وغني له.', en: 'Halfway there! Your baby can hear your voice now — talk and sing to them.' },
  21: { ar: 'ابدئي بالبحث عن الدورات التحضيرية للولادة في منطقتك.', en: 'Start looking into childbirth preparation classes in your area.' },
  22: { ar: 'طفلك يرقد ويستيقظ حسب دورات منتظمة — لاحظي أوقات حركته.', en: 'Your baby sleeps and wakes on regular cycles — notice their active times.' },
  23: { ar: 'احرصي على ممارسة الرياضة الخفيفة كالمشي 30 دقيقة يومياً.', en: 'Aim for light exercise like a 30-minute walk daily.' },
  24: { ar: 'طفلك يستجيب للأصوات! جربي تشغيل الموسيقى الهادئة.', en: 'Your baby responds to sounds! Try playing gentle music.' },
  25: { ar: 'اختبار سكر الحمل يُجرى عادةً بين الأسبوع 24-28.', en: 'Gestational diabetes screening is usually done between weeks 24-28.' },
  26: { ar: 'قد تبدئين بالشعور بتقلصات برابستون-هيكس — تقلصات تدريبية طبيعية.', en: 'You may start feeling Braxton Hicks contractions — normal practice contractions.' },
  27: { ar: 'الأسبوع الأخير في الثلث الثاني! ابدئي في التخطيط لغرفة الطفل.', en: 'Last week of the second trimester! Start planning the nursery.' },
  28: { ar: 'مرحباً بالثلث الثالث! طفلك يفتح عينيه الآن.', en: "Welcome to the third trimester! Your baby can now open their eyes." },
  29: { ar: 'ابدئي في عد حركات طفلك — 10 حركات في كل ساعتين أمر طبيعي.', en: "Start counting baby's kicks — 10 movements in 2 hours is normal." },
  30: { ar: 'تحدثي مع طبيبتك عن خطتك للولادة وما تتوقعينه.', en: 'Talk to your doctor about your birth plan and what to expect.' },
  31: { ar: 'دماغ طفلك ينمو بسرعة — احرصي على الحصول على الدهون الصحية.', en: "Your baby's brain is growing rapidly — make sure to get healthy fats." },
  32: { ar: 'قد تعانين من صعوبة في النوم — وسائد الجسم تساعد كثيراً.', en: 'Sleep may be difficult — a full body pillow can help greatly.' },
  33: { ar: 'طفلك يمارس التنفس الآن استعداداً للحياة خارج الرحم.', en: 'Your baby is practicing breathing to prepare for life outside the womb.' },
  34: { ar: 'ابدئي في تجهيز حقيبة المستشفى مع الأشياء الضرورية.', en: 'Start packing your hospital bag with essentials.' },
  35: { ar: 'طفلك شبه مكتمل النمو! يكتسب وزناً كل أسبوع.', en: 'Your baby is nearly fully developed! They gain weight each week now.' },
  36: { ar: 'احرصي على حضور زيارات ما قبل الولادة أسبوعياً الآن.', en: 'Make sure to attend weekly prenatal checkups from now on.' },
  37: { ar: 'طفلك يعتبر "مكتمل الفترة المبكرة" — الولادة محتملة في أي وقت!', en: 'Your baby is considered "early term" — birth could happen anytime!' },
  38: { ar: 'جهزي دعماً عاطفياً من حولك — الشريك أو أحد أفراد الأسرة.', en: 'Arrange emotional support around you — your partner or a family member.' },
  39: { ar: 'طفلك جاهز تقريباً! استريحي واحتفظي بطاقتك للولادة.', en: 'Your baby is almost ready! Rest and conserve your energy for labor.' },
  40: { ar: 'موعد الولادة المتوقع! كل لحظة تقربك من لقاء طفلك الجميل.', en: 'Your estimated due date! Every moment brings you closer to meeting your baby.' },
};

export function getTipForWeek(week: number): WeeklyTip {
  const clamped = Math.max(4, Math.min(40, week));
  return WEEKLY_TIPS[clamped] ?? WEEKLY_TIPS[20];
}
