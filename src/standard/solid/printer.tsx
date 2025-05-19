import React from "react";
const Printer: React.FC<
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
        d="M5 7.125a3.75 3.75 0 0 0-3.75 3.75v6c0 .966.784 1.75 1.75 1.75h4v-2.25h10v2.25h4a1.75 1.75 0 0 0 1.75-1.75v-6A3.75 3.75 0 0 0 19 7.125zm13.5 3.25a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zM6.25 3.375a2.25 2.25 0 0 1 2.25-2.25h7a2.25 2.25 0 0 1 2.25 2.25v2a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 15.875a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Printer;
