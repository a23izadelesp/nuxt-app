<template>
  <div class="app-container">
    <TheNavbar />
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
/* Global Styles adapted from Vue project */
:root {
  --color-background: #ffffff;
  --color-background-soft: #f8f8f8;
  --color-surface: #ffffff;
  --color-border: #e2e8f0;
  --color-border-hover: #cbd5e1;
  --color-heading: #1e293b;
  --color-text: #334155;
  --color-text-light: #64748b;
  --color-text-dark: #0f172a;
  --color-primary: #3b82f6;
  --color-primary-soft: rgba(59, 130, 246, 0.2);
  --color-accent: #ef4444;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

/* Reset some defaults */
button, input {
  font-family: inherit;
}
</style>
