import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
}

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
);
Content.displayName = 'Card.Content';

type CardComponent = React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof Header;
  Title: typeof Title;
  Description: typeof Description;
  Footer: typeof Footer;
  Content: typeof Content;
};

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
Header.displayName = 'Card.Header';

const Title = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
);
Title.displayName = 'Card.Title';

const Description = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);
Description.displayName = 'Card.Description';

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
Footer.displayName = 'Card.Footer';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-card text-card-foreground shadow-sm',
          variant === 'secondary' && 'bg-secondary',
          className
        )}
        {...props}
      />
    );
  }
) as CardComponent;

Card.displayName = 'Card';

// Add compound components
Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Footer = Footer;
Card.Content = Content;

export { Card };
export type { CardProps };

// Export individual components
export { Header as CardHeader };
export { Title as CardTitle };
export { Description as CardDescription };
export { Footer as CardFooter };
export { Content as CardContent };

// Export types for individual components
export type { HTMLAttributes as CardHeaderProps };
export type { HTMLAttributes as CardTitleProps };
export type { HTMLAttributes as CardDescriptionProps };
export type { HTMLAttributes as CardFooterProps };
export type { HTMLAttributes as CardContentProps };
