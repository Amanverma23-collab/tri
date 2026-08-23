import React from 'react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

export const GoogleAnalyticsTracker: React.FC = () => {
  useGoogleAnalytics();
  return null;
};
