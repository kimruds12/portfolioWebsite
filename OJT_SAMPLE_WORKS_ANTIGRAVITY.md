# OJT Sample Works Section

## Goal

Add a new **Sample Works** section directly below **Skills & Competencies Developed** on the OJT Experience page.

The section must use the same visual structure as the existing **Recent Projects** section. Show exactly three project cards in one row on desktop. Keep the current site font, light and dark theme tokens, borders, shadows, spacing, and responsive behavior.

This section documents real OJT work. It is not a replacement for the main Projects page.

## Placement

Place the new section after the Skills & Competencies Developed accordion or content block and before the month folders.

Use this section order.

1. OJT page heading and company introduction
2. Roles and Key Responsibilities
3. Technologies, Tools and Systems
4. Skills & Competencies Developed
5. **Sample Works**
6. OJT month folders

## Section heading

Use these exact texts.

```txt
Sample Works
Selected hands-on IT support, system, and asset management work completed during my OJT at 11FTC Enterprises, Inc.
```

Do not add a View All Projects button. Do not add a fourth card. Do not use placeholder images for cards one and three.

## Card layout

Create exactly three cards with the same card size and structure as Recent Projects.

- Use a three-column layout on wide screens
- Use two columns when the available container width is too narrow for three readable cards
- Use one column on phones
- Keep every card the same height within a row
- Use `@container` rules when the section is inside a constrained page container
- Never crop text or allow horizontal overflow
- Keep the card footer at the bottom with a flexible content area above it
- Preserve the existing project card hover and focus behavior if it already exists
- Do not add Live or View Website buttons to these cards
- Use Source only on the 11FTCTicketManagementSystem card
- Cards one and three must not show a source button until a real repository link exists

Suggested responsive behavior.

```txt
@container width below 42rem     one card per row
@container width from 42rem      two cards per row
@container width from 72rem      three cards per row
```

## Image rules

Only card two uses an image.

- Reuse the existing 11FTCTicketManagementSystem project image already used in Recent Projects
- Keep the same image treatment, radius, aspect ratio, object fit, and top card placement as Recent Projects
- Do not add an image shell, empty image area, broken image, or stock image to cards one and three
- For cards one and three, begin the content at the top of the card where the image area would normally end
- When real images are supplied later, make each card use the exact same media area and aspect ratio as card two

## Shared card style

Use the existing visual language from Recent Projects.

- Category label in the current compact badge style
- Completion badge in the current style if the card design already has one
- Project title
- Short role or work type line
- One concise description
- Tag chips
- Footer actions only when an action exists

Do not copy the wording or visual content from the reference image. Build the cards with the portfolio’s existing components and tokens.

## Card one

### Content

```txt
Category
IT Operations

Title
IT Infrastructure Support & Workstation Servicing

Work type
On-site Technical Support

Description
Provided on-site workstation support at the 11FTC IT Office, including LAN cabling, internal cable management, damaged component replacement, system troubleshooting, and device restoration.

Tags
Hardware Servicing
LAN Cabling
System Troubleshooting
```

### Action rules

No image for now.

No Live button.

No View Website button.

No Source button for now.

Do not render an empty footer button area. The tag row is the final visible card content until an action is added later.

## Card two

### Content

```txt
Category
Local System

Title
11FTCTicketManagementSystem

Work type
Internship Project

Description
Built a local IT ticket management system for recording issues, assigning solutions, and tracking ongoing support work across company devices and services.

Tags
JavaScript
TypeScript
```

### Image and action rules

Use only the current 11FTCTicketManagementSystem project image.

Show one full-width footer action.

```txt
Source
```

The Source button must use the real existing repository URL already configured for this project. Keep the external or repository icon used by the current project cards. Do not add Live or View Website.

## Card three

### Content

```txt
Category
IT Operations

Title
IT Hardware Asset Management & Device Custody Tracking

Work type
Asset Operations

Description
Tracked laptops, monitors, and peripherals by fixed asset number while managing employee handovers, replacement records, and accountability for damaged equipment.

Tags
Hardware Inventory
FA Tagging
Accountability
```

### Action rules

No image for now.

No Live button.

No View Website button.

No Source button for now.

Do not render an empty footer button area. The tag row is the final visible card content until an action is added later.

## Accessibility and interaction requirements

- Use real buttons or links for actions
- Give the image a useful alt text such as `11FTC Ticket Management System interface`
- Keep visible keyboard focus states
- Keep text contrast readable in light and dark mode
- Do not make the full card act as a link when it has no action
- Keep heading order valid with the Sample Works heading below the Skills and Competencies heading
- Do not use motion that prevents reading or causes layout shifting

## Completion checklist

- Sample Works is below Skills & Competencies Developed
- There are exactly three cards
- Only card two has an image
- Card two has Source only
- Cards one and three have no empty image area or empty action area
- All titles, descriptions, and tags match this document
- The section matches the current Recent Projects design without copying the reference image
- The layout stays clean at phone, tablet, laptop, and wide desktop sizes
