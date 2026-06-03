# Papoicito

Este proyecto contiene la página web que se puede publicar en GitHub Pages.

## Cómo publicar en GitHub Pages

1. Abre una terminal en `c:\Users\Isabel Margarita\Desktop\Códigos\Proyecto1`
2. Inicializa el repositorio Git (si aún no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Inicializar proyecto Papoicito"
   ```
3. Agrega el remoto de GitHub:
   ```bash
   git remote add origin https://github.com/IsavonBasura/Papoicito.git
   ```
4. Envía el contenido a GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Publicar en GitHub Pages

- En GitHub, ve a la configuración del repositorio `Papoicito`.
- En la sección **Pages** selecciona la rama `main` y la carpeta `/ (root)`.
- Guarda los cambios.

## Archivo raíz para GitHub Pages

- Se agregó `index.html` para que GitHub Pages muestre la página correctamente.
- Se agregó `.nojekyll` para evitar el procesamiento Jekyll.

## Notas

- Si quieres que la página se muestre en `https://isavonbasura.github.io/Papoicito/`, GitHub Pages debe estar habilitado en el repositorio.
- El archivo `papoi.html` conserva el contenido original, pero la URL principal de Pages será `index.html`.
