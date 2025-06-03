import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed z-40 bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-indigo-600" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
      <span className="sr-only">{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</span>
    </button>
  );
};

export default ThemeToggle;