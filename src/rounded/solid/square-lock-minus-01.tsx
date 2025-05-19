import React from "react";
const SquareLockMinus_01: React.FC<
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
        d="M11 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5a1 1 0 0 1-2 0v-2.5a5.5 5.5 0 1 1 11 0v2.5a1 1 0 1 1-2 0v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 8.25a96 96 0 0 0-4.475.1c-2.058.095-3.729 1.688-4 3.705-.149 1.1-.275 2.257-.275 3.445s.126 2.344.275 3.445c.271 2.017 1.942 3.61 4 3.705 1.429.066 2.88.1 4.475.1 1.596 0 3.046-.034 4.475-.1 1.593-.073 2.954-1.045 3.614-2.415.145-.303.218-.454.13-.595s-.273-.14-.641-.14H12.75a2.5 2.5 0 0 1 0-5h6.339c.298 0 .448 0 .537-.097s.077-.243.053-.535a35 35 0 0 0-.203-1.813c-.272-2.017-1.943-3.61-4.001-3.705A96 96 0 0 0 11 8.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLockMinus_01;
