import React from "react";
const Code: React.FC<
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
      <path fill="#D9D9D9" d="M8 12h.009zm3.996 0h.008zm3.995 0H16z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.009m3.986 0h.01m3.986 0H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 3h.5a2 2 0 0 1 2 2v4.333a2 2 0 0 0 .4 1.2L22 12l-1.1 1.467a2 2 0 0 0-.4 1.2V19a2 2 0 0 1-2 2H18M6 3h-.5a2 2 0 0 0-2 2v4.333a2 2 0 0 1-.4 1.2L2 12l1.1 1.467a2 2 0 0 1 .4 1.2V19a2 2 0 0 0 2 2H6"
      />
    </svg>
  );
};
export default Code;
