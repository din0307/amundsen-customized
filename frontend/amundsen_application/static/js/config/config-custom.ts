// This file should be used to add new config variables or overwrite defaults from config-default.ts

import { AppConfigCustom } from './config-types';

const configCustom: AppConfigCustom = {
  browse: {
    curatedTags: [],
    showAllTags: true,
    showBadgesInHome: true,
  },
  analytics: {
    plugins: [],
  },
  mailClientFeatures: {
    feedbackEnabled: true,
    notificationsEnabled: true,
  },
  indexDashboards: {
    enabled: true,
  },
  indexUsers: {
    enabled: true,
  },
  indexFeatures: {
    enabled: true,
  },
  userIdLabel: 'email address',
  issueTracking: {
    enabled: true,
    issueDescriptionTemplate: '',
    projectSelection: {
      enabled: true,
      title: 'Issue project key (optional)',
      inputHint: '',
    },
  },
  announcements: {
    enabled: true,
  },
  productTour: {},
};

export default configCustom;
