import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  /*colors*/
  --clr-primary-100: hsla(274, 82%, 60%, 0.25);
  --clr-primary-400: hsla(274, 82%, 60%, 1);

  --clr-accent-400: hsla(0, 100%, 66%, 1);

  --clr-neutral-100: hsla(0, 0%, 100%, 1);
  --clr-neutral-200: hsla(0, 0%, 96%, 1);
  --clr-neutral-300: hsla(0, 0%, 91%, 1);
  --clr-neutral-400: hsla(0, 0%, 46%, 1);
  --clr-neutral-500: hsla(0, 0%, 23%, 1);
  --clr-neutral-600: hsla(0, 0%, 18%, 1);
  --clr-neutral-700: hsla(0, 0%, 12%, 1);
  --clr-neutral-800: hsla(0, 0%, 2%, 1);
 
  --clr-divider: var(--clr-neutral-300);

  --bg-main: var(--clr-neutral-100); 

  /*typography color properties */
  --clr-heading: var(--clr-neutral-600);
  --clr-main-text: var(--clr-neutral-600);
  --clr-sub-text: var(--clr-neutral-400);
  --clr-primary-text: var(--clr-primary-400);

  --ff-sans-serif: 'Inter', sans-serif;
  --ff-serif: 'Lora', serif;
  --ff-mono: 'Inconsolata', monospace;

  --ff-body: var(--ff-sans-serif);

  --spacing-sm: 0.875rem;
  --spacing-md: 1rem; 
  --spacing-lg: 1.25rem; 
  --spacing-xl: 1.5rem; 
  --spacing-2xl: 2rem;
  --spacing-4xl: 4rem
 
  --fs-heading: 2rem;
  --fs-big-text:calc(var(--spacing-md) + 0.125rem);
  --fs-main-text: calc(var(--spacing-md) - 0.062rem);
  --fs-sub-text:var(--spacing-md); 
  --fs-link-text:0.875rem;

  --fw-regular: 400;
  --fw-bold: 700;

  --dropdown-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  display: grid;
  font-family: var(--ff-body);
  background-color: var(--bg-main);
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
} 

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
