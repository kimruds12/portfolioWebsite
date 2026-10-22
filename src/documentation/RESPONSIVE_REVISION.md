# Responsive revision guide

Use this guide when updating the portfolio so every section works well from small phones to wide desktop screens.

## Ready to use prompt

```text
Review and improve the responsiveness of this React website using Tailwind CSS v4.

Keep the current design, colors, content, animations, and desktop layout unless a change is needed to make the page usable on a smaller screen.

Build mobile first. Start with the smallest layout, then add changes only when the available space needs them.

Test every section at these container widths

256px  @3xs
288px  @2xs
320px  @xs
384px  @sm
448px  @md
512px  @lg
576px  @xl
672px  @2xl
768px  @3xl
896px  @4xl
1024px @5xl
1152px @6xl
1280px @7xl

Use Tailwind container queries when a component changes based on the width of its parent.
Add @container to the component wrapper and use variants such as @sm, @md, @lg, and @xl inside it.

Use normal Tailwind screen breakpoints only when the entire page layout needs to change.

Check these device widths too

320px
375px
390px
414px
600px
768px
992px
1200px
1440px

For every width, make sure

No horizontal scrolling appears
Text stays readable and does not overlap
Buttons stay visible, easy to tap, and can wrap when needed
Images keep their shape and do not crop important content
Navigation works on touch screens
Cards stack or resize before they become too narrow
Gaps, padding, headings, and icons scale naturally
Fixed items do not cover important content
Forms and contact links fit within the screen
Animations do not cause clipping or unwanted overflow

Use w-full, max-w, min-w-0, flex-wrap, grid-cols-1, object-cover, and responsive spacing where helpful.
Avoid fixed widths unless they are protected by a responsive fallback.
Do not use overflow-x-hidden to hide a layout issue. Fix the element causing overflow instead.

After making changes, list each edited file, the widths tested, and any remaining limits.
```

## Container query pattern

Use this when a card needs to react to its own width instead of the browser width.

```jsx
<article className="@container w-full rounded-2xl p-4 @md:p-6 @lg:p-8">
  <div className="grid grid-cols-1 gap-4 @lg:grid-cols-[auto_1fr] @lg:items-center">
    <img className="h-40 w-full rounded-xl object-cover @lg:h-48 @lg:w-48" />
    <div className="min-w-0">
      <h3 className="text-xl @md:text-2xl">Project title</h3>
      <p className="mt-2 text-sm @md:text-base">Project details</p>
    </div>
  </div>
</article>
```

## Page width guide

| Screen width | Use it for |
| --- | --- |
| 320px to 599px | Small phones and narrow screens |
| 600px to 767px | Large phones and portrait tablets |
| 768px to 991px | Tablets and small laptops |
| 992px to 1199px | Laptops and desktops |
| 1200px and up | Wide desktop screens |

## Fast revision checklist

- Start with one column on small screens
- Add `sm`, `md`, `lg`, and larger layouts only when needed
- Use `min-w-0` inside flex or grid layouts that contain long text
- Use `max-w-*` to stop text blocks from becoming too wide
- Use `flex-wrap` for buttons, tags, and contact links
- Use `grid-cols-1` first before adding more columns
- Use `w-full` for cards and controls on small screens
- Keep touch targets at least 44px by 44px when possible
- Check both portrait and landscape views
- Test with browser zoom at 200 percent
