import React from "react";
const TextFont: React.FC<
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
        d="M14 19 9 5H7L2 19m2-5h8M16.5 11.5l.13-.195A2.931 2.931 0 0 1 22 12.931V18.5m0-4.5h-3.439A2.56 2.56 0 0 0 16 16.561 2.44 2.44 0 0 0 18.439 19h.302a2.74 2.74 0 0 0 1.41-.39l.152-.092A3.5 3.5 0 0 0 22 15.521z"
      />
    </svg>
  );
};
export default TextFont;
