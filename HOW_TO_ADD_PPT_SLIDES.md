# How to Add PPT Slides to Projects

## Overview
You can add presentation slides to any project that will display in an interactive slide viewer with smooth animations.

## Steps to Add Slides

### 1. Update Project Data
In `lib/data/projects.ts`, add a `slides` array to your project:

```typescript
{
  slug: "your-project-slug",
  title: "Your Project",
  // ... other fields
  slides: [
    {
      title: "Slide 1 Title",
      description: "Description of what this slide covers...",
      image: "/images/slide1.png", // Optional: path to slide image
    },
    {
      title: "Slide 2 Title",
      description: "Description of slide 2...",
    },
    // Add more slides as needed
  ],
}
```

### 2. Update Project Page Component
In your project page (e.g., `app/projects/your-project/page.tsx`):

1. Import the ProjectSlides component:
```typescript
import ProjectSlides from "@/components/projects/ProjectSlides";
```

2. Add slides data to your project data object:
```typescript
const yourProjectData = {
  // ... existing data
  slides: [
    {
      title: "Slide 1 Title",
      description: "Slide 1 description",
    },
    // ... more slides
  ],
};
```

3. Add the ProjectSlides component in your JSX:
```typescript
{yourProjectData.slides && yourProjectData.slides.length > 0 && (
  <ProjectSlides 
    slides={yourProjectData.slides} 
    projectTitle={yourProjectData.title} 
  />
)}
```

## Example: Complete Implementation

```typescript
"use client";

import ProjectSlides from "@/components/projects/ProjectSlides";

const projectData = {
  title: "My Project",
  slides: [
    {
      title: "The Problem",
      description: "Users were struggling with X, Y, and Z challenges...",
    },
    {
      title: "The Solution",
      description: "We built a platform that solves these problems by...",
    },
    {
      title: "Impact & Results",
      description: "The solution resulted in 50% improvement in...",
    },
  ],
};

export default function ProjectPage() {
  return (
    <main>
      {/* ... other content */}
      
      {/* Add slides button */}
      {projectData.slides && projectData.slides.length > 0 && (
        <ProjectSlides 
          slides={projectData.slides} 
          projectTitle={projectData.title} 
        />
      )}
    </main>
  );
}
```

## Features

- **Slide Navigation**: Use arrow buttons or click indicators to navigate
- **Smooth Animations**: Slides transition smoothly with fade and slide effects
- **Keyboard Support**: (Can be added) Arrow keys for navigation
- **Responsive**: Works on all screen sizes
- **Modal View**: Opens in a full-screen modal for better viewing

## Tips

1. Keep slide titles concise (3-5 words)
2. Descriptions should be 1-2 sentences
3. Add images if you have visual slides (place in `/public/images/`)
4. Order slides logically: Problem → Solution → Impact → Next Steps
