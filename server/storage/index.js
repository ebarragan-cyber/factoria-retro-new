import { createFileStorage } from './fileStorage.js';
import { createMemoryStorage } from './memoryStorage.js';

const shouldUseMemoryStorage = () => {
  if (process.env.STORAGE_MODE === 'memory') {
    return true;
  }
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY) {
    return true;
  }
  return false;
};

export const createStorage = () => {
  return shouldUseMemoryStorage() ? createMemoryStorage() : createFileStorage();
};
