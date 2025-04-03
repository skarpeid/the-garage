import { ReactNode } from 'react';

declare module '@/components/ui/Button' {
  export interface ButtonProps {
    variant?: 'default' | 'ghost' | 'outline';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  }

  export function Button(props: ButtonProps): JSX.Element;
}

declare module '@/components/ui/Card' {
  export interface CardProps {
    className?: string;
    children?: ReactNode;
  }

  export function Card(props: CardProps): JSX.Element;
  export function CardHeader(props: CardProps): JSX.Element;
  export function CardTitle(props: CardProps): JSX.Element;
  export function CardContent(props: CardProps): JSX.Element;
}

declare module '@/components/ui/Tabs' {
  export interface TabsProps {
    defaultValue: string;
    className?: string;
    children?: ReactNode;
  }

  export function Tabs(props: TabsProps): JSX.Element;
  export function TabsList(props: { className?: string; children?: ReactNode }): JSX.Element;
  export function TabsTrigger(props: { value: string; className?: string; children?: ReactNode }): JSX.Element;
  export function TabsContent(props: { value: string; className?: string; children?: ReactNode }): JSX.Element;
}

declare module '@/components/ui/Input' {
  export interface InputProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export function Input(props: InputProps): JSX.Element;
} 