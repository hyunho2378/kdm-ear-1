import { typography, space, radius, motion, layout } from './src/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      fontSize: Object.fromEntries(
        Object.entries(typography).map(([k, v]) => [k, [`${v.size}px`, { fontWeight: v.weight }]])
      ),
      spacing: Object.fromEntries(
        Object.entries(space).map(([k, v]) => [k, `${v}px`])
      ),
      borderRadius: Object.fromEntries(
        Object.entries(radius).map(([k, v]) => [k, `${v}px`])
      ),
      transitionDuration: Object.fromEntries(
        Object.entries(motion).map(([k, v]) => [k, `${v}ms`])
      ),
      maxWidth: {
        frame: `${layout.frameMax}px`,
      },
      colors: {
        bg: 'var(--bg)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textTertiary: 'var(--text-tertiary)',
        line: 'var(--line)',
        surfaceFaint: 'var(--surface-faint)',
        accent: 'var(--accent)',
        onAccent: 'var(--on-accent)',
      },
    },
  },
  plugins: [],
};
