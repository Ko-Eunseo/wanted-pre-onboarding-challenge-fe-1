export type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: any;
  disabled?: boolean;
  type: 'submit'|'button'|'reset';
  tabIndex?: number;
}