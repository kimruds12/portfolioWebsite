# OJT experience DTR folder flow

## Purpose

Build the OJT Experience area as a clear folder journey.

```text
Work Experience
See OJT Experience
Monthly folders
Weekly folders
Daily reflection entries
```

Keep the current font families, light mode, dark mode, and site spacing system.

## Entry and back behavior

The `See OJT Experience` button opens the OJT Experience page.

Each folder page has one visible Back button.

| Current page | Back destination |
| --- | --- |
| OJT Experience page | About Me Work Experience with 11FTC selected |
| Month folder page | OJT Experience page |
| Week folder page | Its month folder page |

Use the browser history when it exists. If there is no previous history entry, use the route in the table as a safe fallback.

## OJT Experience page

Show four large month folders in this order.

```text
June 2026
July 2026
August 2026
September 2026
```

### Folder style

Use an original alternating folder-tab layout inspired by the supplied references.

1. Each folder is a full-width horizontal band with a curved tab edge.
2. Alternate the tab position from left to right for each month.
3. June starts with the tab on the left.
4. July uses the tab on the right.
5. August uses the tab on the left.
6. September uses the tab on the right.
7. Keep generous spacing between bands.
8. Do not copy the exact reference layout or text.

When a month folder enters the viewport, animate the folder panel with a small fade and upward motion. Keep the animation short and subtle.

## Month folder pages

Opening a month displays only its week folders. Use the same current theme colors and a clean folder-card style.

### June 2026

```text
Week 3
June 22 to June 26

Week 4
June 29 to June 30
```

### July 2026

```text
Week 4
July 1 to July 3

Week 5
July 6 to July 11

Week 6
July 13 to July 18

Week 7
July 20 to July 25

Week 8
July 27 to July 31
```

### August 2026

```text
Week 8
August 1

Week 9
August 3 to August 8

Week 10
August 10 to August 15

Week 11
August 17 to August 22

Week 12
August 24 to August 29

Week 13
August 31
```

### September 2026

```text
Week 13
September 1 to September 5

Week 14
September 7 to September 12

Week 15
September 14 to September 19

Week 16
September 21 to September 26

Week 17
September 28 to September 30
```

## Week folder pages

Opening a week folder shows a new page with a Back button and the daily DTR entries for that week.

Each date is a separate expandable row. Use a line-based accordion inspired by the fifth reference.

```text
DATE       DAY       HOURS OR DTR STATUS                         PLUS BUTTON
```

Do not use large rounded cards for daily entries. Use full-width rows with divider lines.

### Daily row behavior

1. The row opens when its plus button is clicked or activated with Enter or Space.
2. The plus rotates into an X while the entry is open.
3. The reflection area expands downward with a smooth height and opacity animation.
4. Opening one day does not close another day unless the user chooses an accordion-only mode later.
5. The row keeps keyboard focus visible.
6. Use reduced motion by opening content without movement.

### Daily dates

Render every date listed below. A date with zero OJT hours can show `No OJT entry recorded` in its collapsed row.

#### June Week 3

```text
June 22  Monday
June 23  Tuesday
June 24  Wednesday
June 25  Thursday
June 26  Friday
```

#### June Week 4

```text
June 29  Monday
June 30  Tuesday
```

#### July Week 4

```text
July 1   Wednesday
July 2   Thursday
July 3   Friday
```

#### July Week 5

```text
July 6   Monday
July 7   Tuesday
July 8   Wednesday
July 9   Thursday
July 10  Friday
July 11  Saturday
```

#### July Week 6

```text
July 13  Monday
July 14  Tuesday
July 15  Wednesday
July 16  Thursday
July 17  Friday
July 18  Saturday
```

#### July Week 7

```text
July 20  Monday
July 21  Tuesday
July 22  Wednesday
July 23  Thursday
July 24  Friday
July 25  Saturday
```

#### July Week 8

```text
July 27  Monday
July 28  Tuesday
July 29  Wednesday
July 30  Thursday
July 31  Friday
```

#### August Week 8

```text
August 1  Saturday
```

#### August Week 9

```text
August 3  Monday
August 4  Tuesday
August 5  Wednesday
August 6  Thursday
August 7  Friday
August 8  Saturday
```

#### August Week 10

```text
August 10  Monday
August 11  Tuesday
August 12  Wednesday
August 13  Thursday
August 14  Friday
August 15  Saturday
```

#### August Week 11

```text
August 17  Monday
August 18  Tuesday
August 19  Wednesday
August 20  Thursday
August 21  Friday
August 22  Saturday
```

#### August Week 12

```text
August 24  Monday
August 25  Tuesday
August 26  Wednesday
August 27  Thursday
August 28  Friday
August 29  Saturday
```

#### August Week 13

```text
August 31  Monday
```

#### September Week 13

```text
September 1  Tuesday
September 2  Wednesday
September 3  Thursday
September 4  Friday
September 5  Saturday
```

#### September Week 14

```text
September 7  Monday
September 8  Tuesday
September 9  Wednesday
September 10 Thursday
September 11 Friday
September 12 Saturday
```

#### September Week 15

```text
September 14 Monday
September 15 Tuesday
September 16 Wednesday
September 17 Thursday
September 18 Friday
September 19 Saturday
```

#### September Week 16

```text
September 21 Monday
September 22 Tuesday
September 23 Wednesday
September 24 Thursday
September 25 Friday
September 26 Saturday
```

#### September Week 17

```text
September 28 Monday
September 29 Tuesday
September 30 Wednesday
```

## Reflection content layout

When a daily row opens, show two columns on desktop.

| Left side | Right side |
| --- | --- |
| Activity bullet list | One to three reflection images |

On mobile, stack the activity list above the images.

Use this initial activity content as the reusable reflection format. Assign it to the proper day when daily reflections are added.

```text
Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.

Released the prepared laptop after confirming that it was fully configured and free from issues.

Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.

Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.

Assisted an employee by configuring access to the required design application with the appropriate login credentials.

Set up an email account using POP settings to restore email access.

Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.

Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.
```

### Reflection images

Each daily entry supports one to three images.

1. Show images in a neat responsive grid.
2. Use equal image frames with an aspect ratio to avoid layout movement.
3. Use `object-cover` for workplace reflection photos.
4. Add useful alt text for every image.
5. Do not show empty image placeholders when no image is available.

## Route structure

Use route parameters instead of separate hardcoded pages for every folder.

```text
/ojt-experience
/ojt-experience/june
/ojt-experience/june/week-3
/ojt-experience/july
/ojt-experience/july/week-4
/ojt-experience/august
/ojt-experience/august/week-9
/ojt-experience/september
/ojt-experience/september/week-13
```

Store the monthly folders, weekly folders, daily dates, reflections, and image paths in one OJT data file. Do not hardcode each page separately.

## Suggested files

| File | Responsibility |
| --- | --- |
| `src/components/OJTExperiencePage.jsx` | OJT landing page and month-folder routing shell |
| `src/components/OJTMonthPage.jsx` | Week folder list for one month |
| `src/components/OJTWeekPage.jsx` | Daily DTR rows and expanded reflection area |
| `src/components/OJTDayReflection.jsx` | Reusable daily accordion row and reflection layout |
| `src/data/ojtDtr.js` | Months, weeks, dates, activity text, and image paths |
| `src/App.jsx` | Parameterized OJT routes |

## Quality rules

1. Keep all folder and daily navigation links keyboard accessible.
2. Do not add horizontal overflow.
3. Keep the curved folder tabs readable in light and dark mode.
4. Use only current project fonts and theme tokens.
5. Keep transitions short and use transform and opacity where possible.
6. Respect `prefers-reduced-motion`.
7. Preserve the current OJT back-to-Work-Experience route.
