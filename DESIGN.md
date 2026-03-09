# HeavenApp - Design System & Style Guide

## Color Palette

### Primary Colors (Warm & Meaningful)

#### Amber/Gold (Primary Accent)
Used for calls-to-action, highlights, and warm accents that evoke warmth and light.
```
Amber-50:  #fffbeb (Lightest - backgrounds)
Amber-100: #fef3c7 (Light - borders)
Amber-200: #fcd34d 
Amber-300: #fbbf24
Amber-400: #f59e0b
Amber-500: #f97316 (Standard)
Amber-600: #d97706 (Medium - buttons)
Amber-700: #b45309 (Dark - headings, icons)
Amber-800: #92400e (Darker)
Amber-900: #78350f (Darkest)
```

**Usage**:
- Buttons and CTAs (`.from-amber-600 .to-amber-700` gradient)
- Icon highlights
- Border accents (`.border-amber-100`)
- Heading accents
- Hover states

---

#### Green (Life & Growth)
Used to represent life, renewal, and growth - supporting the theme of remembrance.
```
Green-50:  #f0fdf4 (Lightest - backgrounds)
Green-100: #dcfce7
Green-200: #bbf7d0
Green-300: #86efac
Green-400: #4ade80
Green-500: #22c55e
Green-600: #16a34a (Standard)
Green-700: #15803d (Dark)
Green-800: #166534
Green-900: #145231 (Darkest)

Emerald-600: #059669 (Alternative)
Emerald-700: #047857 (Alternative)
```

**Usage**:
- Secondary buttons and links
- Background gradients
- Navigation elements
- Icons in the green family
- Logo accent color

---

#### Blue (Sky & Communication)
Used for balance and to evoke the sky - peaceful and open.
```
Sky-50:   #f0f9ff
Sky-100:  #e0f2fe
Sky-600:  #0369a1 (Dark)
Sky-700:  #0c4a6e (Darker)

Blue-50:  #eff6ff (Lightest - backgrounds)
```

**Usage**:
- Background gradients
- Secondary feature icons
- Navigation elements
- Balance with warm tones

---

#### Gray (Text & Structure)
Used for text, borders, and structural elements.
```
Gray-50:   #f9fafb (Very light backgrounds)
Gray-400:  #9ca3af (Light text)
Gray-500:  #6b7280 (Medium text)
Gray-600:  #4b5563 (Darker text)
Gray-700:  #374151 (Text)
Gray-900:  #111827 (Dark - footer backgrounds)
```

**Usage**:
- Body text (`.text-gray-600`, `.text-gray-700`)
- Headings (`.text-gray-900`)
- Borders and dividers
- Footer backgrounds (`.bg-gray-900`)

---

### Color Combinations (Gradients)

#### Primary CTA Gradient
```css
background: linear-gradient(to right, #d97706, #b45309);
/* from-amber-600 to-amber-700 */
```
Used for "Get Started" and main action buttons.

#### Hero Background
```css
background: linear-gradient(to bottom right, #fffbeb, #f0fdf4, #eff6ff);
/* from-amber-50 via-green-50 to-blue-50 */
```

#### Feature Section Background
```css
background: linear-gradient(to bottom, #fffbeb, #f0fdf4);
/* from-amber-50 to-green-50 */
```

#### Review Section Background
```css
background: linear-gradient(to bottom, #eff6ff, #f0fdf4);
/* from-blue-50 to-green-50 */
```

#### Footer
```css
background: linear-gradient(to bottom, #111827, #0f172a);
/* from-gray-900 to-gray-950 */
```

#### Navigation Underline
```css
background: linear-gradient(to right, #d97706, #f97316);
/* from-amber-600 to-amber-500 */
```

---

## Typography

### Font Family
**Poppins** (Google Fonts)
- Available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Highly readable, friendly, modern appearance
- Good for emotional, accessible design

### Heading Hierarchy

```
H1: text-2xl (Mobile) → text-4xl (Tablet) → text-5xl (Desktop)
    font-bold
    text-gray-900
    Example: "A Peaceful Space to Remember"

H2: text-2xl md:text-3xl
    font-bold
    text-gray-900
    Example: "Why Choose HeavenApp"

H3: text-xl lg:text-lg
    font-bold
    text-gray-900
    Example: "Easy to Use"

H4: text-lg
    font-bold
    text-gray-900
```

### Body Text

```
Paragraph: text-base md:text-lg
           text-gray-600 / text-gray-700
           leading-relaxed / leading-7

Small text: text-sm
            text-gray-500 / text-gray-600

Extra small: text-xs
             text-gray-500
```

### Text Examples

**Hero Heading**:
```html
<h1 class='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold 
           md:leading=[3rem] lg:leading-[3.5rem] text-gray-900'>
  A Peaceful Space to Remember
</h1>
```

**Section Subtitle**:
```html
<p class='text-center text-gray-600 mt-2 text-lg'>
  Create a meaningful tribute to those who matter most
</p>
```

**Card Title**:
```html
<h1 class='text-lg font-bold text-gray-900'>Easy to Use</h1>
```

---

## Components & Patterns

### Buttons

#### Primary Button (Get Started)
```html
<button class='bg-gradient-to-r from-amber-600 to-amber-700 text-white 
                px-6 py-2.5 rounded-lg 
                hover:from-amber-700 hover:to-amber-800 
                transition-all duration-200 font-medium shadow-md hover:shadow-lg'>
  Get Started
</button>
```

**Characteristics**:
- Amber gradient background
- White text
- Rounded corners (`rounded-lg`)
- Padding: `px-6 py-2.5`
- Smooth transitions
- Shadow on hover
- Font weight: medium

---

### Cards

#### Feature Card
```html
<div class='flex flex-col items-center justify-center space-y-4 p-8 
            bg-white rounded-2xl shadow-sm 
            hover:shadow-lg transition-all duration-300 
            border border-amber-100 hover:border-amber-300'>
  <div class='text-5xl'>{icon}</div>
  <h1 class='text-lg font-bold text-gray-900'>{title}</h1>
</div>
```

**Characteristics**:
- White background
- Rounded corners: `rounded-2xl`
- Padding: `p-8`
- Subtle shadows
- Amber border (`border-amber-100`)
- Enhanced border on hover
- Flex column layout
- Centered content

#### Benefit Card (Why Choose)
```html
<div class='flex flex-col items-center justify-center space-y-4 p-6 
            bg-white rounded-2xl shadow-sm hover:shadow-md 
            transition-shadow border border-amber-100'>
  <Image src={`/images/i${index + 1}.png`} alt={...} width={70} height={70} 
         className='rounded-lg' />
  <h1 class='text-lg font-bold text-gray-900'>{benefit.title}</h1>
  <p class='text-gray-600 text-center text-sm leading-relaxed'>
    {benefit.description}
  </p>
</div>
```

**Characteristics**:
- Same as feature card
- Image with rounded corners
- Text alignment: centered
- Smaller image size (70x70)

#### Testimonial Card
```html
<div class='p-6 bg-white rounded-xl shadow-md 
            border border-amber-100 mx-2'>
  <p class='text-gray-700 italic'>"...testimonial text..."</p>
  <h3 class='font-bold mt-3 text-gray-900'>- Name</h3>
  <p class='text-sm text-gray-500'>Context</p>
</div>
```

---

### Sections

#### Standard Section Layout
```html
<div class='pt-16 pb-16 bg-gradient-to-b from-[color-1] to-[color-2]'>
  <div class='w-[80%] mx-auto text-center'>
    <h1 class='mt-6 text-2xl md:text-3xl font-bold text-center 
               text-gray-900'>
      Section Title
    </h1>
    <p class='text-center text-gray-600 mt-2 text-lg'>
      Subtitle / Description
    </p>
    
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
      {/* Cards go here */}
    </div>
  </div>
</div>
```

**Characteristics**:
- Padding: `pt-16 pb-16` (top/bottom)
- Width: 80% of container (responsive)
- Centered text
- Gradient background
- Grid layout for cards
- Gap between cards: 8 units

---

### Navigation

#### Navbar
```html
<div class='fixed bg-white shadow-lg w-full h-[12vh] z-[1000]'>
  <div class='flex justify-between items-center h-full w-[80%] mx-auto'>
    {/* Logo, Links, Buttons */}
  </div>
</div>
```

**Characteristics**:
- Fixed position
- White background with shadow
- Full width
- Centered content
- Z-index: 1000

#### Nav Link with Animation
```css
.nav__link {
  position: relative;
  display: inline-block;
  padding-bottom: 0.25rem;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(to right, #d97706, #f97316);
  transition: width 0.3s ease;
}

.nav__link:hover::after {
  width: 100%;
}
```

---

## Spacing & Layout

### Padding Standards
```
Small:   p-2, p-4
Medium:  p-6, p-8
Large:   p-10, p-12
Extra:   pt-16, pb-16 (sections)
```

### Margin Standards
```
Small:   m-2, m-4
Medium:  m-6, m-8
Gaps:    gap-4, gap-6, gap-8
```

### Common Gaps
- Between cards: `gap-8`
- Between sections: None (use padding)
- Between elements: `space-y-4`, `space-x-4`

---

## Responsive Design

### Breakpoints (Tailwind Default)
```
sm:  640px  (mobile to tablet)
md:  768px  (tablet to small desktop)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1536px (extra large)
```

### Common Responsive Patterns

#### Grid Columns
```html
<!-- 1 column mobile, 2 tablet, 4 desktop -->
<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
```

#### Font Sizes
```html
<!-- Smaller on mobile, larger on desktop -->
<h1 class='text-2xl sm:text-4xl md:text-5xl'>
```

#### Width
```html
<!-- 80% on desktop, 90% on mobile -->
<div class='w-[80%] sm:w-[80%] mx-auto'>
```

#### Visibility
```html
<!-- Hidden on mobile, visible on desktop -->
<div class='hidden lg:flex'>

<!-- Visible on mobile, hidden on desktop -->
<div class='lg:hidden'>
```

---

## Animations & Transitions

### Standard Transition
```html
<div class='transition-all duration-300'>
```

### Common Animations
- Duration: `duration-200` (faster) to `duration-500` (slower)
- Type: `transition-all`, `transition-shadow`, `transition-colors`
- Easing: Default is ease (no need to specify)

### Hover Effects

#### Shadow Enhancement
```html
hover:shadow-lg transition-all duration-300
```

#### Color Change
```html
hover:from-amber-700 hover:to-amber-800
```

#### Border Change
```html
border border-amber-100 hover:border-amber-300 transition-all
```

---

## Icons (React Icons)

### Icon Usage
```html
<FaLayerGroup className='text-amber-700' />
<FaMobileAlt className='text-green-700' />
<FaShieldAlt className='text-sky-700' />
```

### Icon Sizing
```html
text-3xl  (navbar hamburger)
text-4xl  (small feature icons)
text-5xl  (large feature icons)
```

### Feature Section Colors
```
Amber:    text-amber-700, text-amber-600
Green:    text-green-600, text-green-700
Sky:      text-sky-700, text-sky-600
Emerald:  text-emerald-700
Teal:     text-teal-700
```

---

## Images & Media

### Image Optimization
- Use Next.js `Image` component (auto optimization)
- Responsive sizes with `width` and `height` props
- Lazy load by default

### Common Image Sizes
```html
<!-- Hero image -->
<Image src='/images/hero.png' width={700} height={700} />

<!-- Feature icons -->
<Image src={...} width={70} height={70} className='rounded-lg' />

<!-- App badges -->
<Image src={...} width={150} height={50} />
```

---

## Accessibility

### Text Contrast
- Dark text on light: ✅ Good
- Light text on dark: ✅ Good
- Ensure minimum WCAG AA compliance

### Font Sizes
- Minimum body text: 16px (text-base)
- Headings clearly larger
- Readable line-height

### Interactive Elements
- Buttons min 44x44px (touch-friendly)
- Focus states (add outline on keyboard nav)
- Alt text on all images
- Semantic HTML (buttons, links, sections)

---

## Code Examples

### Complete Feature Card Component
```html
<div class='flex flex-col items-center justify-center space-y-4 p-8 
            bg-white rounded-2xl shadow-sm 
            hover:shadow-lg transition-all duration-300 
            border border-amber-100 hover:border-amber-300'>
  <div class='text-5xl'>
    <FaBook className='text-amber-700' />
  </div>
  <h1 class='text-lg font-bold text-gray-900'>Create Memories</h1>
</div>
```

### Complete Section with Grid
```html
<div class='bg-gradient-to-b from-amber-50 to-green-50 pt-20 pb-20'>
  <div class='w-[80%] mx-auto text-center'>
    <h1 class='mt-6 text-2xl md:text-3xl capitalize font-bold 
               text-center text-gray-900'>
      Features & Benefits
    </h1>
    <p class='text-center text-gray-600 mt-2 text-lg'>
      Everything you need to honor and celebrate memories
    </p>
    
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
      {features.map((feature, index) => (
        <div key={index} class='flex flex-col items-center justify-center 
                                space-y-4 p-8 bg-white rounded-2xl shadow-sm 
                                hover:shadow-lg transition-all duration-300 
                                border border-amber-100 hover:border-amber-300'>
          <div class='text-5xl'>{feature.icon}</div>
          <h1 class='text-lg font-bold text-gray-900'>{feature.text}</h1>
        </div>
      ))}
    </div>
  </div>
</div>
```

---

## Quality Checklist

- [ ] All text has sufficient contrast
- [ ] Buttons are clearly clickable (44x44px minimum)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Colors match the nature-inspired palette
- [ ] Spacing is consistent
- [ ] No orphaned text or awkward line breaks
- [ ] Images are optimized
- [ ] Animations are smooth and purposeful
- [ ] Hover states are clear
- [ ] Loading states are visible
- [ ] Error/success states are clear
- [ ] Accessibility: keyboard navigation works
- [ ] Font size is readable
- [ ] Shadows create proper depth

---

*Last Updated: March 8, 2026*  
*Use this guide when creating new components or maintaining existing ones.*
