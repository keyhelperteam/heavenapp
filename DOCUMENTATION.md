# 📚 HeavenApp Documentation Index

Welcome to HeavenApp! This directory contains comprehensive documentation for the memorial and remembrance platform.

## 📖 Quick Navigation

### For New Developers
Start here if you're new to the project:
1. **[PROJECT.md](./PROJECT.md)** - Project overview, tech stack, and structure
2. **[FEATURES.md](./FEATURES.md)** - Detailed feature breakdown and user stories
3. **[DESIGN.md](./DESIGN.md)** - Design system, colors, typography, and components
4. **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** - Complete component documentation

### For Designers
- **[DESIGN.md](./DESIGN.md)** - Complete design system
- **[PROJECT.md](./PROJECT.md#-design-philosophy)** - Design philosophy
- **[FEATURES.md](./FEATURES.md#design-considerations)** - Design considerations per feature

### For Developers
- **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** - Component structure and usage
- **[PROJECT.md](./PROJECT.md#-tech-stack)** - Tech stack and dependencies
- **[DESIGN.md](./DESIGN.md#-code-examples)** - Code examples and patterns

### For Product Managers
- **[FEATURES.md](./FEATURES.md)** - Feature list and user stories
- **[PROJECT.md](./PROJECT.md#-key-features)** - Feature overview
- **[FEATURES.md](./FEATURES.md#success-metrics)** - Success metrics

---

## 📄 Document Overview

### PROJECT.md (10 mins read)
**What**: Complete project documentation
**Contains**: 
- Project purpose and context
- Feature list overview
- Design philosophy
- Tech stack
- Project structure
- Getting started guide
- Future enhancement ideas

**Best for**: Understanding the big picture

---

### FEATURES.md (15 mins read)
**What**: Detailed feature documentation
**Contains**:
- 8 core features with implementation details
- User stories for each feature
- Design considerations
- Technical requirements
- Future enhancements
- Development priorities (roadmap)
- Success metrics
- Design system usage by feature

**Best for**: Building new features or understanding feature details

---

### DESIGN.md (15 mins read)
**What**: Complete design system documentation
**Contains**:
- Full color palette with codes
- Typography guidelines
- Component patterns (buttons, cards, sections)
- Responsive design breakpoints
- Animations and transitions
- Icon usage
- Accessibility checklist
- Code examples

**Best for**: Maintaining design consistency

---

### COMPONENT_REFERENCE.md (20 mins read)
**What**: Technical component documentation
**Contains**:
- Component tree structure
- Detailed documentation for each component
- Props definitions
- State management
- Usage examples
- Dependencies
- When to modify each component
- Best practices

**Best for**: Building and modifying components

---

## 🎯 Common Tasks

### "I need to update the Hero section"
→ See [COMPONENT_REFERENCE.md #Hero.tsx](./COMPONENT_REFERENCE.md#6-herotsx-hero-section)

### "How do I add a new feature to the Features section?"
→ See [COMPONENT_REFERENCE.md #Feature.tsx](./COMPONENT_REFERENCE.md#8-featuretsx-features-section)

### "What colors should I use?"
→ See [DESIGN.md #Color Palette](./DESIGN.md#color-palette)

### "How are components structured?"
→ See [COMPONENT_REFERENCE.md #Component Tree](./COMPONENT_REFERENCE.md#component-tree)

### "What are the 8 features?"
→ See [FEATURES.md #Core Features Breakdown](./FEATURES.md#core-features-breakdown)

### "What's the tech stack?"
→ See [PROJECT.md #Tech Stack](./PROJECT.md#-tech-stack)

### "How do I add a new component?"
→ See [COMPONENT_REFERENCE.md #Adding New Components](./COMPONENT_REFERENCE.md#adding-new-components)

### "What's the design philosophy?"
→ See [PROJECT.md #Design Philosophy](./PROJECT.md#-design-philosophy)

---

## 💡 Key Information at a Glance

### Project Purpose
A memorial and remembrance platform where users can create lasting tributes, share memories, send virtual flowers, and celebrate the lives of loved ones.

### 8 Core Features
1. **Create Memories** - Build beautiful memorials
2. **Send Virtual Flowers & Candles** - Meaningful tributes
3. **Share Stories & Photos** - Centralized memories
4. **Remember Together** - Community and collaboration
5. **Access Anytime, Anywhere** - Mobile and web
6. **Security & Privacy** - Safe and secure
7. **Caring Support** - Help when needed
8. **Customization** - Personalized tributes

### Tech Stack
- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons 5.5.0
- **Carousel**: react-multi-carousel 2.8.6
- **Font**: Poppins (Google Fonts)

### Color Palette
- **Primary**: Amber/Gold (`#d97706`, `#b45309`) - Warmth & Light
- **Secondary**: Green (`#16a34a`, `#15803d`) - Life & Growth
- **Accent**: Sky Blue (`#0369a1`, `#0c4a6e`) - Peace & Communication
- **Text**: Gray (`#111827` - Dark, `#6b7280` - Medium)

### Component Structure
```
Home.tsx (Main)
├── ResponsiveNav (Navigation)
├── Hero (Landing)
├── WhyChoose (Benefits)
├── Feature (Features Grid)
├── Review (Testimonials)
└── Footer (Footer)
```

---

## 🚀 Getting Started

### Development
```bash
cd /Users/kahfaichong/Projects/nextjs/heavenapp
npm install
npm run dev
# Visit http://localhost:3000
```

### Build
```bash
npm run build
npm start
```

---

## 📋 Recent Improvements (March 2026)

✅ **Visual Design**
- Nature-inspired color palette
- Improved spacing and typography
- Enhanced card designs
- Better hover effects

✅ **Content**
- Meaningful memorial-focused copy
- Specific feature descriptions
- Compelling testimonials
- Clear value propositions

✅ **Navigation**
- Updated CTA button
- Improved mobile menu
- Better visual hierarchy

✅ **Sections**
- Uncommented testimonials
- Gradient backgrounds
- Better visual separation

---

## 📞 Quick Reference

### Design
- **Font**: Poppins (Google Fonts)
- **Colors**: See [DESIGN.md](./DESIGN.md#color-palette)
- **Spacing**: 8px base unit (Tailwind default)
- **Breakpoints**: sm (640px), md (768px), lg (1024px)

### Animation
- **Duration**: 200-500ms
- **Type**: Smooth transitions
- **Easing**: Default (ease)

### Accessibility
- Minimum touch target: 44x44px
- Minimum font size: 16px
- Contrast ratio: WCAG AA
- Keyboard navigation: Required

---

## 🤝 Contributing Guidelines

1. **Read the docs** first for the area you're working on
2. **Follow the design system** - refer to DESIGN.md
3. **Test responsiveness** - mobile, tablet, desktop
4. **Update documentation** when making changes
5. **Maintain consistency** - follow existing patterns

---

## 📚 Additional Resources

### Inside This Project
- `PROJECT.md` - Complete project overview
- `FEATURES.md` - Feature details and roadmap
- `DESIGN.md` - Design system reference
- `COMPONENT_REFERENCE.md` - Component documentation
- `globals.css` - Global styles
- `tailwind.config.js` - Tailwind configuration

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons)
- [React Multi-Carousel](https://www.npmjs.com/package/react-multi-carousel)

---

## 🎯 Next Steps

### For First-Time Developers
1. Read [PROJECT.md](./PROJECT.md) (10 mins)
2. Skim [DESIGN.md](./DESIGN.md) (5 mins)
3. Review [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) (10 mins)
4. Start with a small component update
5. Reference docs as needed

### For Adding Features
1. Check [FEATURES.md](./FEATURES.md) for feature details
2. Review [PROJECT.md #Roadmap](./PROJECT.md#-future-enhancement-ideas)
3. Reference component patterns in [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)
4. Use colors from [DESIGN.md](./DESIGN.md#color-palette)
5. Test all breakpoints

### For Styling Updates
1. Check [DESIGN.md](./DESIGN.md#color-palette) for colors
2. Use patterns from [DESIGN.md](./DESIGN.md#components--patterns)
3. Reference breakpoints in [DESIGN.md](./DESIGN.md#responsive-design)
4. Test on mobile/tablet/desktop

---

## ✨ Key Principles

1. **Compassion First** - This app serves people in grieving
2. **Mobile First** - Designed for on-the-go remembrance
3. **Accessibility** - Inclusive for all users
4. **Simplicity** - Easy to use in emotional moments
5. **Respect** - Honor the memory of loved ones
6. **Connection** - Bring people together

---

## 📞 Questions?

Refer to the relevant documentation:
- **General questions**: [PROJECT.md](./PROJECT.md)
- **Feature questions**: [FEATURES.md](./FEATURES.md)
- **Design questions**: [DESIGN.md](./DESIGN.md)
- **Component questions**: [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)

---

**Last Updated**: March 8, 2026  
**Project Status**: Landing page complete, features in development  
**Future Focus**: User authentication, memorial creation, tribute system
