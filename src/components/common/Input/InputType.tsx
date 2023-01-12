export type InputProps = {
  name?: string;
  id?: string;
  type: 'text' | 'email' | 'password';
  onChange: React.ChangeEventHandler;
  placeholder?: string;
  border?: string;
  value?: string;
  tabIndex?: number;
}