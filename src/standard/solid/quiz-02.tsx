import React from "react";
const Quiz_02: React.FC<
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
        d="M9.25 20v1c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 14.75 21v-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 9.62c0-4.611 3.682-8.37 8.25-8.37s8.25 3.759 8.25 8.37c0 3.087-1.653 5.402-4.029 6.808a.31.31 0 0 0-.151.186l-.203.81a1.75 1.75 0 0 1-1.698 1.326H9.731a1.75 1.75 0 0 1-1.698-1.326l-.202-.81a.32.32 0 0 0-.153-.188C5.296 15.011 3.75 12.69 3.75 9.621m7.242 4.88a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M11 8a1 1 0 1 1 1.842.54 7 7 0 0 1-.453.607l-.09.11c-.155.192-.33.41-.49.63C11.433 10.402 11 11.117 11 12a1 1 0 1 0 2 0c0-.223.11-.503.426-.937.127-.175.264-.345.419-.536l.102-.127c.187-.232.396-.497.577-.778A3 3 0 1 0 9 8a1 1 0 0 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_02;
