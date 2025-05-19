import React from "react";
const HelpCircle: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M11 16.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m0-7a1 1 0 1 1 1.842.54 7 7 0 0 1-.453.607l-.09.11c-.155.192-.33.41-.49.63-.376.516-.809 1.231-.809 2.113a1 1 0 1 0 2 0c0-.223.11-.503.426-.937.127-.175.264-.345.419-.536l.102-.127c.187-.232.396-.497.577-.778A3 3 0 1 0 9 9.5a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HelpCircle;
