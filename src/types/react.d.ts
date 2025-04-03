import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
  }

  interface SVGProps<T> extends SVGAttributes<T> {
    className?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    }
  }
}

declare module 'lucide-react' {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
  }

  export type Icon = React.FC<LucideProps>;

  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const LayoutDashboard: Icon;
  export const Settings: Icon;
  export const User: Icon;
  export const LogOut: Icon;
  export const Lightbulb: Icon;
  export const LineChart: Icon;
  export const Building2: Icon;
  export const Target: Icon;
  export const Briefcase: Icon;
}

declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { PropsWithChildren } from 'react';

  export interface LinkProps extends NextLinkProps {
    className?: string;
  }

  declare const Link: React.FC<PropsWithChildren<LinkProps>>;
  export default Link;
}

declare module '@/components/ui/Button' {
  export interface ButtonProps {
    variant?: 'default' | 'ghost' | 'outline';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  }

  export const Button: React.FC<ButtonProps>;
} 