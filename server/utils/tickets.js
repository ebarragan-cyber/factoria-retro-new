import crypto from 'crypto';

export const generatePaymentReference = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const random = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `EVT-${year}${month}${day}-${random}`;
};

export const generateTicketCodes = (count) => {
  const issuedAt = new Date().toISOString();
  return Array.from({ length: count }, () => ({
    code: `TCK-${crypto.randomBytes(4).toString('hex').toUpperCase()}`,
    issuedAt
  }));
};

export const generateSessionId = () => crypto.randomUUID();
