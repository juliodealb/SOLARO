# SOLARO — solarofilms.com

Sitio estático (GitHub Pages) del catálogo de películas SOLARO.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Estructura de la página. Rara vez se toca. |
| `products.js` | **Aquí se edita todo**: productos, tonos, especificaciones, contacto. |
| `script.js` | Lógica: idioma, catálogo, fichas, cotizador. |
| `styles.css` | Diseño. |
| `assets/opt/` | Imágenes optimizadas en WebP (las que usa el sitio). |
| `assets/*.jpg` | Originales 4096px. No las usa el sitio, se conservan como respaldo. |
| `CNAME` | Dominio personalizado. No borrar. |

## Cosas pendientes

1. **WhatsApp** — en `products.js`, línea `whatsapp:`. Poner el número en formato
   internacional sin `+` ni espacios (ej. `5213312345678`). Mientras diga
   `PENDIENTE` aparece un aviso amarillo al pie del sitio y los botones de
   cotizar llevan al formulario en vez de a WhatsApp.
2. **Teléfono** — misma sección.
3. **Datos térmicos** — `MOSTRAR_SHGC = false`. Cambiar a `true` sólo cuando
   haya reporte de laboratorio con SHGC / TSER reales por tono.
   Recordatorio: `SC = SHGC ÷ 0.87`, y el SC siempre sale más alto que el SHGC.
4. **Garantía** — dice `PENDIENTE` en todos los productos.

## Cómo verlo en local

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```

## HTTPS

El certificado de GitHub Pages estuvo bloqueado por un registro AAAA incorrecto
en GoDaddy (`2606:50c0:8006::153` en vez de `2606:50c0:8003::153`).
Los cuatro AAAA correctos son:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Y los cuatro A:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
