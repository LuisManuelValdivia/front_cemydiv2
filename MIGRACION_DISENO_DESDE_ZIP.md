# Migración de diseño desde ZIP (Home, Header/Footer, Login, Registro, Perfil)

Este documento te deja **todo lo necesario** para migrar el look & feel desde un ZIP fuente a este proyecto (`front_cemydiv2`) de forma controlada.

## 1) Estructura esperada del ZIP

El ZIP debe contener (mínimo):

- `src/app/...` (pantallas)
- `src/components/...` (header/footer/componentes visuales)
- `styles/` o `src/styles/` (tokens, CSS global, módulos)
- `assets/` o imágenes estáticas

## 2) Dónde colocar el ZIP en este repo

Ruta recomendada:

```bash
/workspace/front_cemydiv2/_design_source/src.zip
```

> Si lo subes con otro nombre, solo ajusta la variable `ZIP_PATH` de los comandos.

## 3) Comandos para extraer y validar contenido

```bash
cd /workspace/front_cemydiv2
mkdir -p _design_source/extracted
ZIP_PATH="/workspace/front_cemydiv2/_design_source/src.zip"
python - <<'PY'
import zipfile, os
zip_path = "/workspace/front_cemydiv2/_design_source/src.zip"
out = "/workspace/front_cemydiv2/_design_source/extracted"
with zipfile.ZipFile(zip_path) as z:
    z.extractall(out)
print("ok")
PY
```

Listado rápido de archivos clave:

```bash
cd /workspace/front_cemydiv2
rg --files _design_source/extracted | rg 'src/app|src/components|styles|assets|public'
```

## 4) Matriz de mapeo (origen -> destino)

### Pantallas

- `src/app/page.tsx` -> `app/page.tsx` (Home)
- `src/app/login/page.tsx` -> `app/login/page.tsx`
- `src/app/register/page.tsx` -> `app/registro/page.tsx` *(si en fuente se llama `register`)*
- `src/app/perfil/page.tsx` -> `app/perfil/page.tsx`

### Layout / global

- `src/app/layout.tsx` -> `app/layout.tsx` (header/footer shell)
- `src/app/globals.css` / `styles/*.css` -> merge en `app/globals.css`

### Componentes

- `src/components/Header.*` -> `components/ui/HeaderNav.tsx` o nuevo `components/layout/Header.tsx`
- `src/components/Footer.*` -> mover footer a componente dedicado (recomendado)

### Assets

- `assets/*` o `public/*` (fuente) -> `public/*` (destino)

## 5) Decisiones de diseño que debemos fijar antes de aplicar

Para no migrar "a ciegas", define esto del diseño fuente:

1. **Paleta oficial** (HEX): primario, secundarios, estados (`hover`, `focus`, `disabled`, `error`, `success`).
2. **Tipografías**: familia, pesos, tamaños por jerarquía (`h1`, `h2`, body, caption, botones).
3. **Escala de espaciado**: `4/8/12/16/24/32/48` o la escala exacta de tu diseño.
4. **Radios y sombras**: por tipo de superficie (inputs, cards, modals, CTA).
5. **Estados interactivos**: botones y campos (normal/hover/focus/disabled).

## 6) Entregables de la migración (fase 1 solicitada)

- Home migrada visualmente.
- Header y Footer migrados globalmente.
- Login, Registro y Perfil con UI homogénea.
- Tokens documentados en `app/globals.css`.
- Capturas de validación visual de Home + Login + Registro + Perfil.

## 7) Checklist de QA visual

- [ ] Desktop (>=1280px) correcto.
- [ ] Tablet (768–1024px) correcto.
- [ ] Mobile (360–430px) correcto.
- [ ] Contraste y foco visible accesible.
- [ ] Estados `hover/focus/disabled` aplicados.
- [ ] Sin overflow horizontal no deseado.

## 8) Si quieres que yo lo ejecute directamente ahora

Con que exista el ZIP en esta ruta exacta, yo hago:

1. extracción,
2. mapeo automático de archivos,
3. integración por fases (Home -> Header/Footer -> Login/Registro/Perfil),
4. pruebas + screenshots,
5. commit + PR.

Ruta esperada exacta:

```bash
/workspace/front_cemydiv2/_design_source/src.zip
```
