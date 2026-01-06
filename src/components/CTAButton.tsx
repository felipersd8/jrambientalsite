import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function CTAButton({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className,
  'aria-label': ariaLabel,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const baseClasses = cn(
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'outline' && 'btn-outline',
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
