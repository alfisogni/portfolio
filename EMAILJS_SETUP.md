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

### 3. Crear template de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template:

```
Asunto: Nuevo mensaje desde tu portfolio

Hola Luca,

Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Enviado desde tu portfolio web
```

4. **Anota tu TEMPLATE_ID** (ejemplo: `template_abc456`)

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

### Template HTML para EmailJS:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuevo mensaje - Portfolio</title>
</head>
<body>
    <h2>Nuevo mensaje desde tu portfolio</h2>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Mensaje:</strong></p>
    <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b5cf6;">
        {{message}}
    </div>
    <hr>
    <p><small>Enviado desde lucafisogni.portfolio</small></p>
</body>
</html>
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