import {
  ThemeAppearance,
  USER_THEME_APPEARANCE_KEY,
  PREFERS_COLOR_SCHEME_DARK,
  PREFERS_COLOR_SCHEME_LIGHT,
} from '@/constant/theme';

// Get system default theme setting
export function getPrefersColorScheme() {
  if (window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches) {
    return ThemeAppearance.Dark;
  } else if (window.matchMedia(PREFERS_COLOR_SCHEME_LIGHT).matches) {
    return ThemeAppearance.Light;
  }
}

// Get user theme setting in local storage
export function getUserThemeAppearance() {
  const userThemeAppearance = window.localStorage.getItem(
    USER_THEME_APPEARANCE_KEY
  );
  if (userThemeAppearance === ThemeAppearance.Dark) return ThemeAppearance.Dark;
  else if (userThemeAppearance === ThemeAppearance.Light)
    return ThemeAppearance.Light;
}

// If user selected theme appearance is not the same with system default,
// set selected theme appearance into local storage
export function setUserThemeAppearance(
  selectedThemeAppearance: ThemeAppearance
) {
  if (selectedThemeAppearance !== getPrefersColorScheme()) {
    if (selectedThemeAppearance === ThemeAppearance.Dark) {
      window.localStorage.setItem(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Dark
      );
    } else if (selectedThemeAppearance === ThemeAppearance.Light) {
      window.localStorage.setItem(
        USER_THEME_APPEARANCE_KEY,
        ThemeAppearance.Light
      );
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
  window.document.body.classList.add('transition-all', 'duration-300');
}
