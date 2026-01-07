# Factoría Retro - MVP Entradas (Stripe)

Este repositorio contiene un MVP en **Vite + React** con una API en Node para la compra de entradas con Stripe y un panel `/admin` con login.

## Requisitos
- Node.js 18+

## Variables de entorno
Crea un archivo `.env` con:

```bash
ADMIN_USER=Admin
ADMIN_PASS=Demo123
PAYMENT_IBAN=ES00 0000 0000 0000 0000 0000
PAYMENT_HOLDER=Factoría Retro
PAYMENT_BANK=Banco de Ejemplo
STRIPE_SECRET_KEY=sk_test_xxx
CLIENT_URL=http://localhost:5173
VITE_SUPPORT_EMAIL=mifactoriaretro@gmail.com
```

Opcionales:

```bash
PORT=3001
STORAGE_MODE=memory
CORS_ORIGIN=http://localhost:5173
```

> `STORAGE_MODE=memory` fuerza almacenamiento en memoria (útil en entornos serverless).
> `CORS_ORIGIN` es útil si accedes a la API desde otro dominio/puerto distinto a Vite.
> `STRIPE_SECRET_KEY` es obligatorio para generar la sesión de pago en Stripe Checkout.

## Desarrollo local

```bash
npm run dev
npm run server
```

Esto ejecuta:
- Vite en `http://localhost:5173`
- API en `http://localhost:3001` (Vite hace proxy de `/api`)

## Limitaciones sin base de datos
- En local, los pedidos del panel admin se almacenan en `data/orders.json`.
- En despliegues serverless (Vercel/Netlify) el sistema cambia automáticamente a **memoria**, por lo que los pedidos se perderán con cada reinicio.

## Sustituir Storage por base de datos
La interfaz de almacenamiento está en `server/storage` con los métodos:
- `createOrder()`
- `listOrders()`
- `getOrderById()`
- `confirmOrder()`
- `cancelOrder()`

Para migrar a Prisma/Supabase:
1. Crea una nueva implementación (ej: `server/storage/prismaStorage.js`).
2. Exporta los mismos métodos.
3. Cambia la selección en `server/storage/index.js` para usar la nueva implementación.

La UI y las rutas API no necesitan cambios.
