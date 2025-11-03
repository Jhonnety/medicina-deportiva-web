# 📧 Configuración del Formulario de Contacto

## ✅ Lo que ya está hecho

1. ✅ Endpoint API creado en `app/api/send-email/route.ts`
2. ✅ Formulario conectado al endpoint
3. ✅ Los emails llegarán a **jhon@lokl.life**
4. ✅ El formulario ya es funcional (con o sin configuración de Resend)

## 🚀 Pasos para activar el envío real de emails

### Opción 1: Configuración rápida (5 minutos)

```bash
# 1. Instalar Resend
npm install resend

# 2. Crear archivo de variables de entorno
echo "RESEND_API_KEY=tu_api_key_aqui" > .env.local

# 3. Reiniciar el servidor
npm run dev
```

**Obtener tu API Key:**
1. Ve a [https://resend.com](https://resend.com) y crea una cuenta gratuita
2. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
3. Crea una nueva API Key
4. Copia y pega en `.env.local`

### Opción 2: Sin configurar Resend (modo desarrollo)

Si no configuras `RESEND_API_KEY`, el formulario:
- ✅ Mostrará el mensaje de "éxito"
- ✅ Los datos se mostrarán en la consola del servidor
- ✅ NO enviará emails reales

**Esto es útil para desarrollo y pruebas.**

## 📝 Archivos creados

1. **`app/api/send-email/route.ts`** - Endpoint principal (ya funciona)
2. **`app/api/send-email/route-with-sdk.ts.example`** - Versión mejorada opcional
3. **`INSTALL_RESEND.md`** - Guía detallada paso a paso
4. **`SETUP_EMAIL.md`** - Documentación de configuración

## 🎯 Cambiar el destinatario de los emails

Para cambiar **jhon@lokl.life** por otro email:

1. Abre `app/api/send-email/route.ts`
2. Busca la línea ~37:
   ```typescript
   to: ['jhon@lokl.life'],
   ```
3. Cámbialo por:
   ```typescript
   to: ['jhon@lokl.life'],
   ```

## 🧪 Probar el formulario

1. Ve a `http://localhost:3000`
2. Navega hasta la sección de contacto (scroll abajo)
3. Llena el formulario:
   - Nombre: Test
   - Email: test@ejemplo.com
   - Mensaje: Este es un mensaje de prueba
4. Click en "Enviar Mensaje"
5. Deberías ver: "✓ ¡Mensaje enviado con éxito!"

**Con Resend configurado:**
- El email llega a jhon@lokl.life en segundos

**Sin Resend:**
- Verás en la consola del servidor: "Email simulado enviado: { ... }"

## 💰 Plan gratuito de Resend

- ✅ 100 emails por día
- ✅ 3,000 emails por mes
- ✅ Perfecto para este proyecto

## ❓ ¿Necesitas ayuda?

Lee los archivos:
- `INSTALL_RESEND.md` - Guía paso a paso con screenshots
- `SETUP_EMAIL.md` - Información técnica detallada

## 🔧 Versión mejorada (opcional)

Si instalaste Resend y quieres emails más bonitos:

1. Renombra `app/api/send-email/route.ts` a `route.ts.backup`
2. Renombra `app/api/send-email/route-with-sdk.ts.example` a `route.ts`
3. Reinicia el servidor

Esta versión incluye:
- ✨ HTML con mejor diseño
- ✅ Validación de email
- 📱 Responsive design
- 🎨 Colores de marca

## 🎉 ¡Listo!

El formulario ya funciona. Solo necesitas configurar Resend si quieres enviar emails reales en producción.

Para desarrollo, el formulario funciona perfectamente sin configuración adicional.

