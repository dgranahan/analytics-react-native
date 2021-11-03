import type { Config } from './types';

export const batchApi = 'https://api.segment.io/v1/batch';
export const defaultApiHost = 'api.segment.io/v1';

export const defaultConfig: Config = {
  writeKey: '',
  flushAt: 20,
  flushInterval: 30,
  retryInterval: 60,
  maxBatchSize: 1000,
  maxEventsToRetry: 1000,
  trackDeepLinks: false,
  trackAppLifecycleEvents: false,
  autoAddSegmentDestination: true,
};
