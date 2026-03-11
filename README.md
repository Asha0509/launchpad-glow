# 3D Performance Optimizations

## Model and Texture Compression
- Use .glb with Draco compression for any future 3D models (see gltf-transform, gltf-pipeline).
- All product images should be WebP (already present in src/assets/products/).
- Keep texture sizes <= 1024px for hero, 512px/256px for others.
- Use Blender's decimate modifier or mesh simplification for low-poly mobile models.
# Aesthetics To Spaces (A2S)

India's first AI-powered home design infrastructure.

## Overview

A2S helps users design their perfect living spaces with:
- Room-specific product catalogs
- Cross-platform price intelligence
- AI assistant that builds room designs from a single prompt

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **3D**: Three.js + React Three Fiber
- **Database**: Supabase
- **Email**: Resend

## Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Launch

March 29, 2026

## Contact

- Website: [aestheticstospaces.in](https://aestheticstospaces.in)
- Email: hello@mail.aestheticstospaces.tech
- Instagram: [@aestheticstospaces](https://instagram.com/aestheticstospaces)
- LinkedIn: [Aesthetics To Spaces](https://linkedin.com/company/aesthetics-to-spaces)
- X: [@A2S_India](https://x.com/A2S_India)

© 2026 Aesthetics To Spaces. All rights reserved.
