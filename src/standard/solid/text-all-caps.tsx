import React from "react";
const TextAllCaps: React.FC<
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
        d="M1 5a2 2 0 0 1 2-2h7a1 1 0 1 1 0 2h-.5v14h.5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h1.5V5H3v1.5a1 1 0 0 1-2 0zm13 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1.5V5H21v1.5a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2h-7a1 1 0 1 0 0 2h.5v14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAllCaps;
