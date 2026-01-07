export const getPaymentInstructions = () => ({
  iban: process.env.PAYMENT_IBAN ?? 'ES00 0000 0000 0000 0000 0000',
  holder: process.env.PAYMENT_HOLDER ?? 'Factoría Retro',
  bank: process.env.PAYMENT_BANK ?? 'Banco de Ejemplo'
});
