# Sweet Crumbs Bakery Website

A responsive multi-page website for Sweet Crumbs Bakery, developed as part of the Web Development coursework.

This README documents the progress, changes made from Part 1 to Part 2, and proof of meeting the requirements for CSS Styling and Responsive Design.
## Project Overview
The website showcases Sweet Crumbs Bakery’s:
- **Home page**
- **About page**
- **Products catalog**
- **Orders form**
- **Contact form with embedded map**

It uses a single **external stylesheet** (`css/styles.css`) across all pages for consistent styling, typography, and layout.
##  Part 1 Feedback Fixes
The following corrections were made based on Part 1 feedback:
- Fixed inconsistent filenames (`Orders.html` → `orders.html`).
- Updated file paths for case sensitivity (`Css/Styles.css` → `css/styles.css`).
- Improved alt attributes on images for accessibility.
- Updated navigation to be consistent across all pages.
## Part 2 Requirements
### 1. External CSS Stylesheet
- All pages link to **`css/styles.css`**.  
- A consistent naming convention is used.

### 2. Base Styling
- Global reset applied with `* { margin: 0; padding: 0; box-sizing: border-box; }`.  
- Base font family: *Segoe UI / Verdana* for text, *Georgia* for headings.  
- Default background: light cream (`#fff8f0`).

### 3. Typography
- Heading hierarchy (`h1`, `h2`, `h3`) styled with serif fonts.  
- Properties applied: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.  
- Typography scales responsively with `rem`/`em`.

### 4. Layout
- **Flexbox** used for navigation and headers.  
- **CSS Grid** used for product catalog (`.product-grid`).  
- Consistent spacing with `rem` and `%`.

### 5. Decorative Styles
- Borders, shadows (`box-shadow`), and rounded corners (`border-radius`).  
- Hover/focus effects for links and buttons.
### 6. Responsive Design
- **Breakpoints** at 900px (tablet) and 600px (mobile).  
- Desktop → multi-column layouts.  
- Tablet → reduced spacing and flexible layout.  
- Mobile → single column + drawer menu.  
- Relative units (`rem`, `em`, `%`) used for sizing.  
- Images made responsive with `<picture>`, `srcset`, and `sizes`.
### 7. Testing & Iteration
- Browser developer tools used to test across devices.  
- Screenshots captured (see below).  
- Iterations documented in the changelog.
##  Features Implemented
- Consistent external stylesheet.
- Responsive mobile navigation drawer (`☰ Menu` button).  
- Responsive images with fallback formats.  
- Order and Contact forms with required validation.  
- Footer with contact details and social links.  
## Responsive Design
**Breakpoints**
- **Desktop (≥ 900px):**
  - Multi-column product grid.
  - Full navigation bar visible.
- **Tablet (600px – 899px):**
  - Compact header.
  - Flexible product grid.
- **Mobile (≤ 599px):**
  - Single column layout.
  - Drawer menu toggle replaces full nav bar.
  - Font sizes scaled down using `rem`.
## Screenshots 
### Desktop View
/screenshots/desktop.png
### Tablet View
/screenshots/tablet.png
### Mobile View
/screenshots/mobile.png
## Changelog
### v2.0 – Part 2 Submission (2025-09-25)
- Created external stylesheet `css/styles.css`.
- Added CSS reset for consistency across browsers.
- Applied typography styling (headings, text, letter spacing).
- Implemented Flexbox for navigation and header layout.
- Added Grid-based product catalog layout.
- Replaced `px` with `rem`, `em`, and `%` where appropriate.
- Implemented responsive design with media queries.
- Added responsive images (`srcset`, `sizes`, `<picture>`).
- Completed mobile drawer navigation.
- Updated README with documentation, screenshots, and references.
### v1.0 – Part 1 Submission (2025-09-15)
- Created multi-page HTML structure (Home, About, Products, Orders, Contacts).
- Added navigation, header, and footer across all pages.
- Included product images and company logo.
- Added basic order form and contact form.
- Embedded Google Map on contact page.
## References  
Mozilla Developer Network (MDN). (n.d.) *Responsive design basics*. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design (Accessed: 25 September 2025).  

Mozilla Developer Network (MDN). (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images (Accessed: 25 September 2025).  

Coyier, C. (2011) *rem: Global ems or local ems?* CSS-Tricks. Available at: https://css-tricks.com/rem-global-em-local/ (Accessed: 25 September 2025).  

W3Schools. (n.d.) *CSS tutorial*. Available at: https://www.w3schools.com/css/ (Accessed: 25 September 2025).  

[RosebankCollage] (2025) *Web development lecture notes*, Module Code [insert module code], [Your Institution], Semester 2.  
##  Setup Instructions
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/sweet-crumbs-bakery.git
## **git link
git clone https://github.com/your-username/sweet-crumbs-bakery.git