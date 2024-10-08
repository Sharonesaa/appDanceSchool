## Descripción

**App Dance School** es una aplicación web completa para la gestión de clases de baile, estudiantes e instructores. La aplicación incluye un sistema de reservas, notificaciones por correo electrónico utilizando **Nodemailer**, y un frontend construido con **React** y **Redux** para la administración y visualización de las clases, todo empaquetado y desarrollado utilizando **Vite** para un entorno rápido y eficiente.

## Tecnologías Utilizadas

- **NestJS**: Framework backend utilizado para construir APIs robustas.
- **React**: Librería de JavaScript para construir la interfaz de usuario (frontend).
- **Redux**: Librería de administración de estado para gestionar el estado global en el frontend.
- **Vite**: Herramienta de construcción rápida y ligera para el desarrollo del frontend.
- **Nodemailer**: Para el envío de correos electrónicos, como notificaciones de confirmación de reserva.
- **PostgreSQL**: Base de datos relacional para almacenar información de estudiantes, clases, e instructores.
- **Cloudinary**: Servicio de almacenamiento de imágenes, utilizado para manejar fotos de perfil de instructores y fotos de eventos.

## Características

- **Gestión de Clases**: Crear, actualizar y eliminar clases de baile.
- **Gestión de Instructores**: Añadir y editar información de instructores.
- **Sistema de Reservas**: Permite a los estudiantes reservar y cancelar clases.
- **Notificaciones por Correo**: Utiliza **Nodemailer** para enviar correos de confirmación de reserva o cancelación.
- **Carga y Gestión de Imágenes**: Integración con **Cloudinary** para almacenar imágenes de instructores y eventos.
- **Frontend React con Redux**: La interfaz de usuario está construida con React y Redux, utilizando **Vite** como bundler para un desarrollo rápido.

## Requisitos Previos

- **Node.js** v16 o superior
- **Docker** para ejecutar el contenedor
- **PostgreSQL** para la base de datos
- **Cuenta en Cloudinary** para la gestión de imágenes
- **SMTP** para la configuración de Nodemailer

## Instalación

Sigue los pasos a continuación para ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Sharonesaa/appDanceSchool.git

2. Navega al directorio del proyecto:

   ```bash
   cd appDanceSchool
3. Instala las dependencias del backend:

   ```bash
   npm install
   
4. Navega al directorio del frontend e instala sus dependencias:

   ```bash
   cd frontend
   npm install

5. Configura la base de datos PostgreSQL y asegúrate de tener la conexión lista en tu entorno local.

6. Ejecuta la aplicación en modo desarrollo:

   - Para el **backend**:
   
   ```bash
   npm run start:dev

Para el frontend (usando Vite):
npm run dev

7. Accede a la aplicación en tu navegador:
   
   http://localhost:3000

## Uso

1. **Registro de Usuarios**: Los usuarios pueden registrarse y ver las clases disponibles.
2. **Gestión de Clases**: Los administradores pueden crear, actualizar y eliminar clases de baile.
3. **Reserva de Clases**: Los estudiantes pueden reservar o cancelar clases a través de la interfaz.
4. **Notificaciones por Correo**: Cada reserva y cancelación genera un correo de confirmación al usuario.
5. **Carga de Imágenes**: Usa **Cloudinary** para gestionar imágenes de instructores y eventos.



