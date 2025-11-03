# Configuración del Envío de Emails

Este documento explica cómo configurar el envío de emails para el formulario de contacto.

## Opción 1: Resend (Recomendado)

### 1. Crear una cuenta en Resend

1. Ve a [https://resend.com](https://resend.com) y crea una cuenta
2. Verifica tu dominio (o usa `onboarding@resend.dev` para pruebas)
3. Obtén tu API Key en [https://resend.com/api-keys](https://resend.com/api-keys)

### 2. Configurar las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
RESEND_API_KEY=tu_api_key_aqui
```

### 3. Actualizar el remitente (opcional)

Si verificaste tu propio dominio en Resend, actualiza el campo `from` en `app/api/send-email/route.ts`:

```typescript
from: 'Medicina Deportiva <contacto@tudominio.com>',
```

## Opción 2: Usar otro servicio de email

Si prefieres usar otro servicio (SendGrid, Mailgun, etc.), modifica el archivo `app/api/send-email/route.ts` para usar la API del servicio elegido.

## Destinatario de los emails

Los emails se envían actualmente a: **jhon@lokl.life**

Para cambiar el destinatario, edita el campo `to` en `app/api/send-email/route.ts`:

```typescript
to: ['nuevo_email@ejemplo.com'],
```

## Modo de desarrollo

En desarrollo, si no configuras `RESEND_API_KEY`, el formulario simulará el envío exitoso y mostrará los datos en la consola del servidor.

## Probar el formulario

1. Inicia el servidor de desarrollo: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envía
4. Verifica que el email llegue a jhon@lokl.life

