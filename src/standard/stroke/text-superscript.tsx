import React from "react";
const TextSuperscript: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 21h-5M9 3v18M2 5.5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5M22 12h-4c0-2.221 4-2.115 4-4.5 0-.828-.895-1.5-2-1.5s-2 .672-2 1.5"
      />
    </svg>
  );
};
export default TextSuperscript;
