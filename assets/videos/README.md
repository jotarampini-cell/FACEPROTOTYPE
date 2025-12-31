# Carpeta de Videos - Hero Section

## 📹 Sube tu video aquí:

**Nombre del archivo**: `hero-bg.mp4`

### Especificaciones recomendadas:
- **Formato**: MP4 (H.264)
- **Resolución**: 1920x1080 (Full HD)
- **Duración**: 10-20 segundos (se reproducirá en loop)
- **Peso**: Máximo 5MB para carga rápida
- **FPS**: 24-30 fps
- **Audio**: No necesario (el video está en mute)

### Después de subir el video:

Abre el archivo `index.html` y busca la línea 384 aproximadamente:

```html
<source src="https://cdn.coverr.co/videos/coverr-team-meeting-in-modern-office-6770/1080p.mp4" type="video/mp4">
```

Reemplázala con:

```html
<source src="assets/videos/hero-bg.mp4" type="video/mp4">
```

### (Opcional) Imagen Poster:

También puedes subir una imagen `hero-poster.jpg` en la carpeta `assets/images/` y actualizar la línea:

```html
poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
```

Por:

```html
poster="assets/images/hero-poster.jpg"
```

### Optimizar tu video con FFmpeg (opcional):

Si tienes FFmpeg instalado, usa este comando para optimizar:

```bash
ffmpeg -i original.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an hero-bg.mp4
```

## 🎥 Dónde conseguir videos gratuitos:

- **Pexels**: https://www.pexels.com/videos/
- **Pixabay**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/
- **Videvo**: https://www.videvo.net/

Busca: "business meeting", "team work", "innovation", "office modern"
