# 🎨 LMS DESIGN SYSTEM — MODERN UI GUIDELINES (PHASE 1)

## 1. Design Philosophy

**Friendly · Modern · Soft · High-end LMS**

Visual language based on:
- Soft rounded edges
- Gentle shadows
- Pastel accents
- Spacious layout
- Professional education UI

## 2. App Layout Rules

### Default Background
```
bg-slate-50
```

### Card Background
```
bg-white
rounded-xl
border border-slate-100
shadow-sm
hover:shadow-md
transition-all
```

### Spacing Rules
```
Padding: p-6 (cards)
         px-8 py-6 (sections)
Gap:     gap-6 or gap-8 between elements
```

## 3. Color System

### Brand Color
```
Primary:       bg-emerald-600 text-white
Hover:         hover:bg-emerald-700
Border:        border-emerald-200
Active state:  bg-emerald-600
```

### Accent Colors for Metadata (Badges)
```
Purple:  bg-purple-100 text-purple-700
Orange:  bg-orange-100 text-orange-700
Blue:    bg-blue-100 text-blue-700
Rose:    bg-rose-100 text-rose-700
Green:   bg-emerald-100 text-emerald-700
```

### Text Colors
```
Title:   text-slate-900
Body:    text-slate-600
Muted:   text-slate-400
```

## 4. Sidebar Design

### Container
```
w-64 
bg-white 
border-r border-slate-100 
h-screen fixed left-0 top-0 
p-4 
flex flex-col
```

### Active Nav Item
```
bg-emerald-600 
text-white 
rounded-xl 
shadow-md
```

### Inactive Nav Item
```
text-slate-500 
hover:bg-slate-50 
hover:text-slate-900 
rounded-xl 
transition
```

## 5. Course Card Design

### Card Container
```
group 
bg-white 
rounded-2xl 
border border-slate-100 
shadow-sm 
hover:shadow-lg 
hover:-translate-y-1 
transition-all duration-300 
overflow-hidden
```

### Thumbnail
```
aspect-video 
bg-slate-100 
rounded-t-2xl 
overflow-hidden
```

### Episode Badge
```
absolute top-3 left-3 
bg-slate-900/80 
text-white 
text-xs 
px-2 py-1 
rounded-md
```

### Title
```
text-lg 
font-bold 
text-slate-900 
group-hover:text-emerald-700 
transition
```

### Card Footer
```
flex items-center justify-between 
border-t 
pt-4 
text-xs 
text-slate-500
```

## 6. Top Navigation

### Container
```
h-20 
bg-white 
border-b border-slate-100 
flex items-center justify-between 
px-8 
sticky top-0 
z-40
```

### Search Input
```
bg-slate-50 
rounded-full 
px-5 py-2.5 
text-sm 
focus:ring-2 focus:ring-emerald-100 
transition-all
```

## 7. Typography System

| Element | Styles |
|---------|--------|
| Page Title | `text-2xl font-bold text-slate-900` |
| Section Title | `text-lg font-semibold text-slate-800` |
| Card Title | `text-base font-bold text-slate-900` |
| Body Text | `text-sm text-slate-600` |
| Meta | `text-xs font-medium text-slate-500` |

## 8. Shadows & Borders

```
Default Border:  border-slate-100
Default Shadow:  shadow-sm
Hover Shadow:    shadow-md
Transition:      transition-all
```

## 9. Icon Rules

- **Library**: Lucide icons only
- **Stroke Width**: `stroke-width={2}`
- **Color Defaults**:
  - Inactive: `text-slate-400`
  - Active: `text-emerald-600`

## 10. Reference Design

![LMS Admin Course View](https://cdn.builder.io/api/v1/image/assets%2Fcd0a52c7353f4a2892b66ce52a81f5d2%2F1a994d4edd9e4628bbcd01136a956a35?format=webp&width=800)

*Shows course grid layout with cards, sidebar navigation, and modern UI styling*

## 11. Component Implementation Checklist

When building components:

- ✅ Use Tailwind classes exactly as specified
- ✅ Apply soft shadows (shadow-sm, shadow-md)
- ✅ Use emerald-600 for primary actions
- ✅ Maintain consistent rounded corners (rounded-xl, rounded-2xl)
- ✅ Add proper spacing (p-6, gap-6)
- ✅ Use slate colors for text hierarchy
- ✅ Apply transitions on hover states
- ✅ Use Lucide icons with stroke-width={2}
- ✅ Keep layouts spacious and not cramped
- ✅ Follow the typography scale exactly

## 12. shadcn/ui Integration

When using shadcn/ui components:
- Customize components to match this design system
- Override default colors to use emerald-600 as primary
- Ensure borders use slate-100
- Apply shadow-sm by default, shadow-md on hover
- Use slate color palette throughout
