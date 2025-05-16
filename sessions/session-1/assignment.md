# Research Task: CSS Length Units (Due next session)

> “Pixels are easy—until they aren’t!”

CSS gives us several families of units; each solves a different sizing problem.  
Explore **at least** the ones below and prepare a short summary (≈1 slide or 3-minute demo each):

| Unit | Stands for | Scales with | Common use-cases |
|------|------------|-------------|------------------|
| `px` | pixel      | nothing (absolute) | fine-grained borders, 1-pixel-perfect UI |
| `rem`| root-em    | root font size     | consistent spacing across components |
| `em` | element-em | *this* element’s font size | icon buttons, line-height hacks |
| `%`  | percent    | parent’s dimension | fluid cards, responsive paddings |
| `vw` | viewport-width | width of browser window | hero sections that fill the screen |
| `vh` | viewport-height| height of browser window | full-screen modals, loading spinners |

**Your mission**

1. Build a tiny CodePen (or one of the HTML files here) showing how each unit behaves when:
   - the root font size changes,
   - the viewport resizes,
   - the component sits inside a scaled container.
2. Conclude: *When do you pick which unit?* Back your answer with screenshots or videos.

Bring your demo next time—we’ll vote on the most mind-blowing trick! 🎉
