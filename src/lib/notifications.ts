import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;

  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleLocalNotification(options: {
  title: string;
  body: string;
  trigger: Notifications.NotificationTriggerInput;
  identifier?: string;
}): Promise<string> {
  return Notifications.scheduleNotificationAsync({
    content: { title: options.title, body: options.body },
    trigger: options.trigger,
    identifier: options.identifier,
  });
}

export async function cancelNotification(identifier: string): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync(identifier);
}

export async function cancelAllNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

/**
 * Register for push notifications (for future remote notifications).
 */
export async function registerForPushNotifications(): Promise<string | null> {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
    });
  }

  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return null;

  const token = await Notifications.getExpoPushTokenAsync();
  return token.data;
}
