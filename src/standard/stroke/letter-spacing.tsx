import React from "react";
const LetterSpacing: React.FC<
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
        d="M2 22V2M22 22V2M16.998 18l-1.88-4.5M7 18l1.87-4.5m6.248 0L11.985 6 8.87 13.5m6.249 0H8.869"
      />
    </svg>
  );
};
export default LetterSpacing;
