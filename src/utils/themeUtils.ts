import { ThemeAppearance, USER_THEME_APPEARANCE_KEY } from '@/constant/theme';

// Get system default theme setting
export function getPrefersColorScheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ThemeAppearance.Dark;
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return ThemeAppearance.Light;
  }
}

// Get user theme setting in local storage
export function getUserThemeAppearance() {
  const userThemeAppearance = window.localStorage.getItem(
    USER_THEME_APPEARANCE_KEY
  );
  if (userThemeAppearance === 'dark') return ThemeAppearance.Dark;
  else if (userThemeAppearance === 'light') return ThemeAppearance.Light;
}

// If user selected theme appearance is not the same with system default,
// set selected theme appearance into local storage
export function setUserThemeAppearance(
  selectedThemeAppearance: ThemeAppearance
) {
  if (selectedThemeAppearance !== getPrefersColorScheme()) {
    switch (selectedThemeAppearance) {
      case ThemeAppearance.Dark:
        window.localStorage.setItem(USER_THEME_APPEARANCE_KEY, 'dark');
        break;
      case ThemeAppearance.Light:
        window.localStorage.setItem(USER_THEME_APPEARANCE_KEY, 'light');
        break;
      default:
        break;
    }
  } else {
    window.localStorage.removeItem(USER_THEME_APPEARANCE_KEY);
  }
}

export function setThemeAppearanceClass(
  selectedThemeAppearance: ThemeAppearance
) {
  switch (selectedThemeAppearance) {
    case ThemeAppearance.Dark:
      window.document.documentElement.classList.add('dark');
      break;
    case ThemeAppearance.Light:
    default:
      window.document.documentElement.classList.remove('dark');
      break;
  }
}

export function triggerThemeAppearanceTransition() {
  window.document.body.classList.add('transition-all', 'duration-500');
}
