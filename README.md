# Rexilandia

Juego infantil para colorear dinosaurios, animales y objetos, con voces, música y retos.

La aplicación que se juega es la web de `src/`. La carpeta `android/` solo la mete en un WebView para generar el archivo `.aab` de Google Play. No es otro juego.

## Cómo abrir la web

```bash
npm install
npm run dev
```

## Cómo generar el AAB

Hace falta Java 17 y Android SDK 36.

```bash
npm install
cd android
./gradlew bundleRelease
```

Ese comando primero empaqueta la web (`npm run build:android`) y después compila `bundleRelease`.

Sin clave de firma, el archivo sale en:

`android/app/build/outputs/bundle/release/`

Google Play no acepta un AAB sin firmar. La clave no está en el repositorio. Cómo crearla y usarla está explicado en el mensaje de preparación del proyecto; no subas el `.jks` ni las contraseñas.

En GitHub, la acción **Generar AAB** deja el archivo para descargar en la pestaña Actions, durante 14 días.
