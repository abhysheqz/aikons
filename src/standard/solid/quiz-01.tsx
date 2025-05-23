import React from "react";
const Quiz_01: React.FC<
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
        d="M10.86 1.663c.66-.55 1.62-.55 2.28 0l2.225 1.854h3.337c.984 0 1.781.797 1.781 1.78v3.338l1.854 2.225c.55.66.55 1.62 0 2.28l-1.854 2.225v3.337c0 .984-.797 1.781-1.78 1.781h-3.338l-2.225 1.854c-.66.55-1.62.55-2.28 0l-2.225-1.854H5.298a1.78 1.78 0 0 1-1.781-1.78v-3.338L1.663 13.14c-.55-.66-.55-1.62 0-2.28l1.854-2.225V5.298c0-.984.797-1.781 1.78-1.781h3.338zM11 16.5a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1m0-7a1 1 0 1 1 1.842.54 7 7 0 0 1-.453.607l-.09.11c-.155.192-.33.41-.49.63-.376.516-.809 1.231-.809 2.113a1 1 0 1 0 2 0c0-.223.11-.503.426-.937.127-.175.264-.345.419-.536l.102-.127c.187-.232.396-.497.577-.778A3 3 0 1 0 9 9.5a1 1 0 0 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_01;
