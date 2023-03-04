export function useDarkModeSwitch() {
  const switchDarkMode = (isDark: boolean) => {
    if (isDark) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  };

  return { switchDarkMode };
}
