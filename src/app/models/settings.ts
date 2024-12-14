export interface Settings {
  companyName: string;
  apiUrl: string;
  theme: string;
  language: 'ru-RU' | 'en-US';
  features: {
    enableChat: true;
    enablePayments: false;
    enableNotifications: true;
  };
  supportEmail: string;
}
