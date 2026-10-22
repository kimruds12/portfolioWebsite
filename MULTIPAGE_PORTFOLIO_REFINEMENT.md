# Portfolio refinement guide

## Purpose

Revise the portfolio into three clear pages while keeping the current font families and visual identity.

This guide is written so Antigravity can build the changes without guessing about the page structure, navigation behavior, or content.

## Required pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Wall design, featured work, credentials preview, and contact section |
| Projects | `/projects` | Full project collection and project filters |
| About Me | `/about` | About Me, Skills, Experience, Education, Credentials, and delivery framework |

Use React Router for page navigation. Do not use one long single-page navigation system for these three primary pages.

## Keep the current type system

Keep the font families already loaded by the project.

| Use | Font |
| --- | --- |
| Large headings and wall design | Sora |
| Body copy and buttons | Inter |
| Labels, dates, tags, and technical details | Space Grotesk or the current monospace treatment |

Do not add a new font package. Keep the current responsive type scale unless a small change is needed for the new layouts.

## Header and navigation

### Navigation links

Show only these links in this exact order.

```text
Home
Projects
About Me
```

Remove Contact, Skills, Credentials, and other section links from the primary navigation.

Keep the light and dark mode control and Resume button beside the navigation on desktop. Keep both controls inside the mobile navigation panel on smaller screens.

### Clean navigation layout

Build a clean floating navigation bar inspired by the supplied reference.

1. Put the identity area on the left.
2. Put the three navigation links inside a centered pill.
3. Put the theme control and Resume button on the right.
4. Make the inner space equal on all sides.
5. Center the theme icon both vertically and horizontally.
6. Give every navigation control the same visible height.
7. Use a consistent gap between the identity pill, navigation pill, theme control, and Resume button.
8. Keep the outer padding and border spacing visually equal.
9. Use a soft border, rounded corners, and a subtle shadow that works in both themes.
10. Keep the header above page content without covering headings.

Use route state for the active navigation link.

| Route | Active navigation item |
| --- | --- |
| `/` | Home |
| `/projects` | Projects |
| `/about` | About Me |

Scrolling inside the Home page must not change the active navigation item from Home to another item.

## Home identity rotation

### Home wall state

When the visitor is on the Home wall, show this text identity pill.

```text
Kim Ruds Guston | Front-End Developer
```

After five seconds, replace it with the KD logo and this label.

```text
KimDev
```

After another five seconds, switch back to the full name and role. Continue this loop while the visitor remains on the Home wall.

Use a short crossfade and a small scale or slide transition. Keep it subtle and avoid layout movement.

### KD logo asset

Use this asset for the KimDev identity state.

```text
/Assets/KDLogo.jpg
```

Add `KDLogo.jpg` to `public/Assets` if it is not already present. Set a fixed image box size so the header does not jump as the identity changes.

### State outside the wall

When the visitor scrolls below the Home wall, show only the KD logo and KimDev. Stop the five-second rotation.

When the visitor returns to the Home wall, restart the rotation from the full name state.

On the Projects and About Me pages, always show only the KD logo and KimDev. Do not run the identity rotation on these pages.

### Reliability requirements

1. Clear the timer when the header unmounts.
2. Clear and restart the timer when the visitor enters or leaves the Home wall.
3. Do not create multiple timers after a re-render.
4. Pause the rotation while the browser tab is hidden.
5. Use a reduced motion fallback that switches without animated movement.
6. Give the logo useful alternative text such as `KimDev logo`.

## Home page

The Home page stays a longer page with its own scroll sections. The Home navigation item remains active across all Home page sections.

Use this exact order.

1. Wall Design
2. Featured Projects
3. Credentials and Achievements
4. Let’s Connect
5. Footer

### Wall Design

Keep the existing wall design, portrait treatment, hero text, and introductory actions unless a layout adjustment is needed for the new header.

Do not change the header identity behavior while the visitor is inside the Home wall. Only change it when the visitor leaves the wall area.

### Featured Projects

Show only three selected projects on Home.

Each card should include a project image, category, project title, short description, technology tags, and one clear action.

Add a visible button below the cards.

```text
View All Projects
```

The button must navigate to `/projects`.

### Credentials and Achievements preview

Keep the credentials preview on Home. Add a prominent button below the carousel.

```text
View Full Credentials
```

The button must navigate to `/about#credentials`.

Use the supplied second reference as direction for the carousel.

1. The active certificate sits in the center.
2. One adjacent certificate is visible on each side.
3. The active certificate is sharp, largest, and fully visible.
4. Side certificates are smaller, dimmer, and slightly rotated.
5. Use previous and next buttons with visible keyboard focus.
6. Support touch swipes on mobile.
7. Pause automatic movement while a visitor hovers, focuses, or touches the carousel.
8. Do not crop certificate text or important parts of the image.

### Let’s Connect

Keep the current contact area at the bottom of Home.

All Let’s Connect buttons from other pages must return here using this URL.

```text
/#connect
```

Use `id="connect"` on the Home contact section. After navigation, scroll it into view smoothly without hiding the heading behind the fixed header.

### Footer

Keep a footer at the bottom of Home. It should include the KimDev or Kim Ruds Guston identity, current year, and existing social links.

## Projects page

The Projects page contains the full project list and existing project filtering tools.

### Required content

1. Projects heading and short intro
2. Category filter controls
3. Search field if it already exists
4. All project cards
5. Let’s Connect call to action
6. Footer

Add this call to action after the project list.

```text
Ready to discuss a project?
Let’s Connect
```

The Let’s Connect button must navigate to `/#connect`.

Do not add the contact page link back to the primary navigation.

## About Me page

Create an About Me page with these sections in this exact order.

1. About Me
2. Skills
3. Experience
4. Education
5. Credentials and Achievements
6. Project Delivery Framework
7. Let’s Connect call to action
8. Footer

### About Me

Start with a short personal introduction. Leave this section ready for the user to add or revise their biography later.

### Skills

Restore the existing Skills content on this page. Keep its categories, icons, and responsive behavior. Remove it from Home.

### Experience, Education, and Credentials

Use a tabbed content area inspired by the third reference.

Use these labels.

```text
Work Experience
Education
Certificates and Achievements
```

The selected tab should show one focused card at a time with optional carousel controls.

Every card should have a clear title, organization or school, date, short description, and relevant technologies or achievements where useful.

Keep the selected tab easy to identify in both light and dark modes. Make all tabs keyboard accessible.

Give the credentials section this id.

```text
credentials
```

This allows the Home button to open the full credentials section directly.

## Project Delivery Framework

Add the delivery framework near the bottom of About Me. Use the fourth reference as layout direction.

### Section heading

```text
Project Delivery Framework
4-Sprint Lifecycle
```

### Supporting copy

```text
Our development methodology prioritizes transparent stakeholder communication, predictable milestone tracking, and iterative feedback loops to eliminate black-box development.
```

### Phase 1

```text
Project Initiation and Scope Definition
```

Focus

```text
Aligning with stakeholders on core business objectives, mapping user journeys, defining technical constraints, and identifying system edge cases.
```

Key deliverable

```text
Comprehensive Project Scope Statement and Master Milestone Schedule.
```

### Phase 2

```text
System Architecture and UI/UX Prototyping
```

Focus

```text
Establishing the interface hierarchy and design tokens, alongside formalizing the underlying database architecture and API contracts.
```

Key deliverable

```text
Approved UI Wireframes such as Figma files and Technical Schema Documentation.
```

### Phase 3

```text
Iterative Agile Development
```

Focus

```text
Executing clean, modular development through weekly Agile sprints. Continuous integration deploys completed features to staging environments for immediate User Acceptance Testing.
```

Key deliverable

```text
Weekly Live Staging Deployments for continuous stakeholder review.
```

### Phase 4

```text
Quality Assurance, Release and Closeout
```

Focus

```text
Executing rigorous quality control, including cross-browser compatibility testing and performance audits such as Core Web Vitals, followed by final production deployment.
```

Key deliverable

```text
Successful Production Release and full source code and intellectual property handover.
```

### Delivery framework call to action

Replace the current call to action text with the following.

```text
Ready to kick off development or upgrade your current stack?
Let’s define the product backlog, formalize technical requirements, and forecast sprint milestones.
```

Use this exact button label.

```text
Let’s Connect
```

The button must navigate to `/#connect`.

## Suggested component structure

| File | Responsibility |
| --- | --- |
| `src/App.jsx` | Router setup, shared header, shared footer, and theme wrapper |
| `src/components/Navbar.jsx` | Route links, clean layout, theme control, Resume button, and identity rotation |
| `src/components/HomePage.jsx` | Wall, featured projects, credentials preview, and contact section |
| `src/components/ProjectsPage.jsx` | Full project list and post-project call to action |
| `src/components/AboutPage.jsx` | About content, Skills, tabbed records, and sprint framework |
| `src/components/CredentialsCarousel.jsx` | Coverflow-style certificate preview with accessible controls |
| `src/components/ExperienceTabs.jsx` | Work, Education, and Credentials tabs |
| `src/components/ProjectDeliveryFramework.jsx` | Four-phase delivery section and contact call to action |

Reuse the existing `Projects`, `Skills`, `Credentials`, and `Footer` components where possible. Move them into the page components rather than copying their data or markup.

## Responsive and accessibility rules

1. Test at 320px, 375px, 390px, 414px, 600px, 768px, 992px, 1200px, and 1440px.
2. Keep the desktop header clean without cramped pills or uneven padding.
3. Change to a mobile menu before the desktop controls become crowded.
4. Keep all touch controls at least 44px tall and wide where possible.
5. Keep every text color readable in light and dark modes.
6. Support keyboard navigation for links, tabs, carousel buttons, theme control, and Resume button.
7. Respect `prefers-reduced-motion` by turning off automatic carousel movement and identity animation movement.
8. Do not cause horizontal scrolling.
9. Use `min-w-0`, wrapping, and responsive text sizes for long labels.
10. Use semantic headings in correct order on every page.

## Completion checklist

- Home, Projects, and About Me are separate routes
- Navigation shows only Home, Projects, and About Me
- Contact is removed from primary navigation
- Home stays the active navigation item while Home sections scroll
- The Home wall rotates full identity and KimDev every five seconds
- Scrolling below the Home wall locks the identity to KimDev with the KD logo
- Projects and About Me always use KimDev with the KD logo
- Home shows exactly three featured projects and a View All Projects button
- Home credentials use a coverflow-style certificate carousel and a View Full Credentials button
- Projects includes a Let’s Connect button that returns to Home contact
- About Me includes About, Skills, Experience, Education, Credentials, and the four-sprint framework
- The delivery framework uses the revised call to action and Let’s Connect button
- All pages include the footer
- Current fonts remain in use
- `npm run build` passes
- `npm run lint` passes
