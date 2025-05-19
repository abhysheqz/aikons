import React from "react";
const LanguageCircle: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8.5h4.5m0 0H17m-5.5 0V7m-3 10c2.5-2 5.5-6 6-8.5M10 11c.5 1.5 2.5 4 3.5 4.5"
      />
    </svg>
  );
};
export default LanguageCircle;
