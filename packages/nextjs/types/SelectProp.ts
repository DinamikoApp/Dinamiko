export type SelectProps = {
  onSelect: (option: number) => void;
};

export type InputProps = {
  onChange: (text: string) => void;
};

export type TimeProps = {
  onChange: (timeValue: string, timeUnit: string) => void;
};
