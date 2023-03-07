export interface ButtonProps {
  btnText: string;
  variant: string;
  margin?: string;
  post?: {
    id: string;
    text: string;
  };
  onClick: () => void;
}
