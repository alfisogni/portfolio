# 📧 Configuración de EmailJS para Portfolio

## 🚀 Pasos para activar el formulario de contacto

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Regístrate gratis (200 emails/mes incluidos)
3. Confirma tu email

### 2. Conectar tu servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add Service**
3. Selecciona **Gmail** (recomendado)
4. Sigue las instrucciones para conectar tu cuenta
5. **Anota tu SERVICE_ID** (ejemplo: `service_xyz123`)

### 3. Crear template de email personalizado

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. **IMPORTANTE**: Copia TODO el contenido del archivo `emailjs-template.html` que está en tu carpeta del portfolio
4. Pégalo en el campo HTML del template en EmailJS
5. En el **Subject** pon: `Nuevo mensaje desde tu portfolio - {{from_name}}`
6. **Anota tu TEMPLATE_ID** (ejemplo: `template_abc456`)

**📁 El archivo `emailjs-template.html` contiene tu template personalizado completo con:**
- ⭐ Tu logo estrella
- 🎨 Colores de tu marca (violeta/negro)
- 📱 Diseño responsive
- 🔗 Enlaces a tus redes sociales
- ✨ Formato profesional

### 4. Obtener tu User ID
1. Ve a **Account** → **General**
2. Copia tu **User ID** (ejemplo: `user_def789`)

### 5. Actualizar el código
En el archivo `js/script.js`, línea aproximadamente 214, reemplaza:

```javascript
// Cambiar esta línea:
emailjs.init("TU_USER_ID_AQUI");

// Por tu User ID real:
emailjs.init("user_def789");

// Y estas líneas (aproximadamente línea 238):
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form)

// Por tus IDs reales:
emailjs.sendForm('service_xyz123', 'template_abc456', form)
```

### 6. Probar el formulario
1. Guarda los cambios
2. Recarga tu portfolio
3. Envía un mensaje de prueba
4. Revisa tu email

## 🎯 Configuración recomendada

### Template HTML personalizado para Luca:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 10px;">
  <div style="text-align: center; margin-bottom: 20px;">
    <div style="font-size: 32px; margin-bottom: 10px;">⭐</div>
    <h2 style="color: #8b5cf6; margin: 0; font-size: 20px;">Nuevo mensaje desde el portfolio</h2>
    <p style="color: #64748b; margin: 5px 0;">Luca Alejandro Fisogni - Desarrollador Full Stack</p>
  </div>
  
  <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="margin-bottom: 20px; padding: 15px 0; border-bottom: 1px dashed #e2e8f0;">
      <table role="presentation" style="width: 100%;">
        <tr>
          <td style="vertical-align: top; width: 50px;">
            <div style="
              padding: 10px;
              background: linear-gradient(135deg, #8b5cf6, #6d28d9);
              border-radius: 50%;
              font-size: 20px;
              text-align: center;
              color: white;
            ">
              👤
            </div>
          </td>
          <td style="vertical-align: top; padding-left: 15px;">
            <div style="color: #1a1a1a; font-size: 18px; font-weight: bold; margin-bottom: 5px;">
              {{from_name}}
            </div>
            <div style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
              📧 {{from_email}}
            </div>
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
              <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #1a1a1a;">{{message}}</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    
    <div style="text-align: center; padding: 15px 0; color: #64748b; font-size: 12px;">
      <p style="margin: 0;">⭐ Enviado desde lucafisogni.dev ⭐</p>
      <p style="margin: 5px 0 0 0;">Desarrollador Full Stack • Backend Specialist</p>
    </div>
  </div>
</div>
```

## 🔧 Resolución de problemas

### Error: "EmailJS is not defined"
- Verifica que el script de EmailJS esté cargando correctamente
- Revisa la consola del navegador para errores

### Emails no llegan
1. Revisa la carpeta de spam
2. Verifica que el SERVICE_ID y TEMPLATE_ID sean correctos
3. Confirma que tu cuenta de Gmail esté conectada

### Error 400/401
- Verifica que el USER_ID sea correcto
- Asegúrate de que los nombres de los campos coincidan (`from_name`, `from_email`, `message`)

## 📝 Notas importantes

- **Gratis hasta 200 emails/mes**
- Los emails llegan desde tu propia cuenta Gmail
- Puedes personalizar completamente el template
- Funciona sin necesidad de backend

## 🎉 ¡Listo!

Una vez configurado, tu formulario estará 100% funcional y recibirás todos los mensajes directamente en tu email.

---
*Configuración creada para el portfolio de Luca Alejandro Fisogni*