// src/components/ui/badge.tsx
import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors';

  const variants = {
    default: 'bg-blue-600 text-white',
    secondary: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
    outline:
      'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return <div className={classes} {...props} />;
}

export { Badge };
