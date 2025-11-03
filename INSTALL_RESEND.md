# Instalación y Configuración de Resend para el Formulario de Contacto

## Paso 1: Instalar la dependencia de Resend

Ejecuta el siguiente comando en la terminal:

```bash
npm install resend
```

## Paso 2: Crear cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

## Paso 3: Obtener API Key

1. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
2. Haz clic en "Create API Key"
3. Dale un nombre (ej: "Medicina Deportiva Web")
4. Copia la API Key

## Paso 4: Configurar variable de entorno

Crea un archivo `.env.local` en la raíz del proyecto (si no existe):

```bash
# En la raíz del proyecto
touch .env.local
```

Agrega tu API Key al archivo:

```env
RESEND_API_KEY=re_tuapikey123456789
```

**IMPORTANTE:** Asegúrate de que `.env.local` esté en tu `.gitignore` (ya debería estarlo).

## Paso 5: Verificar tu dominio (Opcional pero recomendado)

### Para producción:

1. Ve a [https://resend.com/domains](https://resend.com/domains)
2. Haz clic en "Add Domain"
3. Ingresa tu dominio (ej: `medicina-deportiva.com`)
4. Agrega los registros DNS proporcionados
5. Espera la verificación

### Para desarrollo/pruebas:

Puedes usar `onboarding@resend.dev` que ya está configurado. El código actual ya usa este email por defecto.

## Paso 6: Actualizar el código (si verificaste tu dominio)

Si verificaste tu propio dominio, edita `app/api/send-email/route.ts` línea ~36:

```typescript
from: 'Medicina Deportiva <contacto@tudominio.com>', // Cambia esto
```

## Paso 7: Probar el formulario

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a `http://localhost:3000` y navega a la sección de contacto

3. Llena el formulario de prueba:
   - Nombre: Tu nombre
   - Email: tu-email@ejemplo.com
   - Teléfono: (opcional)
   - Mensaje: Este es un mensaje de prueba

4. Haz clic en "Enviar Mensaje"

5. Verifica que el email llegue a **jhon@lokl.life**

## Límites del Plan Gratuito de Resend

- 100 emails por día
- 3,000 emails por mes
- Perfecto para sitios pequeños y medianos

## Cambiar el destinatario

Para cambiar a quién llegan los emails, edita `app/api/send-email/route.ts` línea ~37:

```typescript
to: ['jhon@lokl.life'], // Cambia esto
```

Puedes agregar múltiples destinatarios:

```typescript
to: ['email1@ejemplo.com', 'email2@ejemplo.com'],
```

## Troubleshooting

### Error: "RESEND_API_KEY no está configurada"

- Asegúrate de crear el archivo `.env.local`
- Verifica que la variable se llame exactamente `RESEND_API_KEY`
- Reinicia el servidor de desarrollo después de crear el archivo

### Los emails no llegan

1. Verifica en [https://resend.com/emails](https://resend.com/emails) el estado de los emails
2. Revisa la carpeta de spam
3. Verifica que el destinatario sea correcto

### Error 403 o 401

- Tu API Key es incorrecta o expiró
- Genera una nueva API Key en Resend

## Alternativa: Usar el SDK de Resend (Versión mejorada)

Si instalaste el paquete `resend`, puedes usar el SDK oficial actualizando el archivo `app/api/send-email/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Dentro de la función POST:
const data = await resend.emails.send({
  from: 'Medicina Deportiva <onboarding@resend.dev>',
  to: ['jhon@lokl.life'],
  subject: `Nuevo mensaje de contacto de ${name}`,
  html: emailContent,
  reply_to: email,
});
```

Esta versión es más limpia y tiene mejor manejo de errores.

