# Design Guidelines: Digital Product Marketplace

## Design Approach
**Reference-Based Approach** drawing from industry leaders:
- **Gumroad**: Clean minimalism, creator-focused layouts, streamlined checkout
- **Etsy**: Rich product imagery, detailed discovery experience, marketplace warmth
- **Shopify**: Professional e-commerce patterns, trust indicators, conversion optimization

**Key Design Principles:**
- Visual-first product showcasing (planners and designs are inherently visual)
- Clean, uncluttered layouts that let products shine
- Professional yet approachable marketplace aesthetic
- Focus on conversion and instant gratification (digital delivery)

## Color Palette

**Light Mode:**
- Primary: 220 70% 50% (trust-inspiring blue)
- Background: 0 0% 100% (clean white)
- Surface: 220 15% 97% (subtle warm gray)
- Text Primary: 220 25% 15% (near black)
- Text Secondary: 220 10% 45% (muted gray)
- Accent: 340 75% 55% (energetic coral-red for CTAs)
- Success: 145 65% 45% (purchase confirmation green)

**Dark Mode:**
- Primary: 220 70% 60% (lighter blue)
- Background: 220 20% 10% (deep navy-black)
- Surface: 220 15% 15% (elevated dark surface)
- Text Primary: 220 10% 95% (off-white)
- Text Secondary: 220 10% 65% (muted light gray)
- Accent: 340 70% 60% (brighter coral)
- Success: 145 60% 50% (brighter green)

## Typography

**Font Families:**
- Primary (Interface): Inter (Google Fonts) - clean, modern, excellent readability
- Display (Headings): Plus Jakarta Sans (Google Fonts) - friendly, professional
- Mono (Price Tags): JetBrains Mono - crisp pricing display

**Hierarchy:**
- Hero Headlines: text-5xl lg:text-6xl, font-bold
- Section Headers: text-3xl lg:text-4xl, font-bold
- Product Titles: text-xl lg:text-2xl, font-semibold
- Body Text: text-base, font-normal
- Captions/Metadata: text-sm, font-medium

## Layout System

**Spacing Primitives:**
Core units: **2, 4, 6, 8, 12, 16, 20, 24** (Tailwind units)
- Micro spacing: gap-2, p-4
- Component padding: p-6, p-8
- Section spacing: py-16 lg:py-24
- Container padding: px-4 lg:px-8

**Grid Systems:**
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Dashboard Grid: grid-cols-1 lg:grid-cols-3 (sidebar + main content)
- Checkout: grid-cols-1 lg:grid-cols-2 (form + summary)

## Component Library

**Navigation:**
- Sticky header with transparent backdrop-blur when scrolling
- Logo left, category navigation center, cart/profile icons right
- Mobile: Hamburger menu with slide-out drawer
- Shopping cart icon with item count badge

**Product Cards:**
- Aspect ratio 4:3 product preview image with hover zoom
- White/dark surface with subtle border and shadow on hover
- Product title (truncate to 2 lines)
- Creator name in muted text
- Price tag with mono font, prominent display
- Star rating + number of sales below price
- Quick "Add to Cart" button on hover (desktop)

**Product Detail Page:**
- Split layout: Image gallery left (60%), Details right (40%)
- Multiple preview images in thumbnail strip
- Large primary image with lightbox functionality
- Sticky purchase section: Price, quantity, Add to Cart button
- Tabbed content: Description, File Details, Reviews
- "What's Included" checklist with file formats and sizes
- Creator profile card with other products

**Shopping Cart:**
- Slide-out drawer from right side
- Product thumbnail, title, price per item
- Quantity controls with live total update
- Prominent "Checkout" button
- Empty state with illustration and browse CTA

**Seller Dashboard:**
- Sidebar navigation: Products, Sales, Analytics, Settings
- Product management table with inline edit/delete
- Upload new product modal with drag-drop file upload
- Preview cards showing how products appear to buyers
- Sales metrics cards: Total Revenue, Products Sold, Average Price

**Forms & Inputs:**
- Consistent dark mode implementation across all inputs
- Floating labels for text inputs
- File upload with drag-drop zone and progress indicators
- Clear validation states (red for error, green for success)
- Disabled states with reduced opacity

## Page-Specific Layouts

**Homepage:**
- Hero: Full-width banner (h-[500px]) with featured product showcase, overlay gradient, centered headline "Discover Premium Digital Products for Creators" + CTA
- Featured Categories: 4-column grid with category cards (icons + titles)
- Trending Products: Horizontal scrolling carousel
- New Arrivals: 3x4 product grid
- Trust Section: 3-column stats (products sold, happy customers, creators)
- Footer: Multi-column with categories, help links, social media, newsletter signup

**Product Listing:**
- Left sidebar: Filters (category checkboxes, price range slider, file type)
- Top bar: Search input, sort dropdown (newest, price, popular)
- Main grid: Responsive product cards with pagination
- Filter chips showing active filters with remove option

**Checkout:**
- Progress indicator: Cart → Details → Payment → Confirmation
- Left column: Order summary with product thumbnails
- Right column: Email input, Stripe payment element
- Trust badges below payment form
- Clear total breakdown (subtotal + processing fee)

**Confirmation:**
- Success icon and headline
- Order number and email confirmation message
- Download buttons for each purchased product
- Recommended products carousel

## Images

**Hero Section:**
- Large background image (1920x1080) showing workspace with planner/design tools
- Overlay: Dark gradient (bottom to top, 60% opacity)
- Hero image should feel aspirational and creative

**Product Images:**
- Mockup-style presentations of planners (on desks, tablets showing UI/UX designs)
- Preview pages of research papers
- Consistent aspect ratio 4:3 for all product thumbnails
- High-quality, professional photography or rendered mockups

**Category Images:**
- Icon-style illustrations for each category
- Consistent visual style across all category representations

**Empty States:**
- Custom illustrations for empty cart, no search results, no products yet
- Friendly, minimalist illustration style

## Animations

Use sparingly for polish:
- Smooth cart drawer slide-in (transition-transform duration-300)
- Product card hover lift (translate-y-1 with shadow increase)
- Button hover states (native)
- Image zoom on product card hover (scale-105 transform)
- Loading spinners during checkout

## Trust & Conversion Elements

- Secure payment badge near checkout button
- "Instant Download" label on product cards
- "30-day money-back guarantee" below purchase button
- Recent purchase notifications (toast): "Someone just bought X in Y location"
- Creator verification badges
- Product rating stars prominently displayed

**Design Confidence:** This comprehensive system creates a professional, conversion-optimized marketplace that balances Gumroad's simplicity with Etsy's discovery-rich experience, tailored specifically for digital creative products.