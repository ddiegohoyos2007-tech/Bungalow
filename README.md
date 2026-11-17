# Bungalow Cajamarca: página web

Web de una sola página para el bungalow, hecha en HTML, CSS y JavaScript, sin dependencias. Se publica gratis con GitHub Pages.

## Qué incluye

- Portada con botón de reserva por WhatsApp.
- Datos rápidos: huéspedes, camas y baños.
- Descripción del bungalow.
- Galería de fotos con visor a pantalla completa.
- Comodidades.
- Qué visitar en Cajamarca: Baños del Inca, Cumbe Mayo, Otuzco, Granja Porcón y más.
- Mapa de ubicación.
- Bloque de reservas con enlaces a WhatsApp, Airbnb y Booking.
- Formulario de contacto, que abre el correo con la consulta ya escrita.
- Botón flotante de WhatsApp.
- SEO: meta etiquetas, vista previa al compartir y datos estructurados para Google.
- Diseño adaptado a celulares.

## Enlaces configurados

| Canal    | Enlace |
|----------|--------|
| WhatsApp | https://wa.link/zfmrv6 |
| Correo   | bungalowcajamrca@gmail.com |
| Airbnb   | https://www.airbnb.cl/rooms/1586560293277584547 |
| Booking  | https://www.booking.com/Share-51Z6vq |

## Cómo personalizarla

1. **Fotos:** sube tus fotos a la carpeta `images/` con estos nombres:
   - `portada.jpg` para el fondo de la portada (horizontal, de unos 1920 px de ancho).
   - De `foto-1.jpg` a `foto-8.jpg` para la galería. `foto-1` sale grande y también en "El bungalow".

   Mientras falte una foto, se ve un recuadro de color en su lugar.
2. **Textos:** en `index.html`, busca los comentarios `EDITA:`. Ahí cambias la descripción, la cantidad de huéspedes, camas y baños, las comodidades y la zona.
3. **Mapa:** en `index.html`, cambia `q=Cajamarca,+Peru` por tu dirección o tus coordenadas, por ejemplo `q=-7.16,-78.50`.
4. **Colores:** al inicio de `css/styles.css`.

Consejo: comprime las fotos en https://squoosh.app antes de subirlas para que la web cargue rápido.

## Publicarla gratis con GitHub Pages

1. Junta los cambios en la rama `main`.
2. En GitHub, abre **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
3. Cada vez que haya un cambio en `main`, la web se publica sola en `https://<tu-usuario>.github.io/bungalow/`.

Si después quieres un dominio propio, como `bungalowcajamarca.com`, se configura en la misma sección de Pages.

## Ver la web en tu computadora

Abre `index.html` en el navegador, o ejecuta `python3 -m http.server` y entra a http://localhost:8000.
