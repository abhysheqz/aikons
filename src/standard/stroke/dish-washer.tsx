import React from "react";
const DishWasher: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 8h20" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5 5h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M15 18l.008-2.5m0 0v-3.4c0-.061.055-.108.115-.097.427.076 1.227.288 1.734.8.177.179.258.424.302.671l.34 1.909a.1.1 0 0 1-.1.117z"
      />
    </svg>
  );
};
export default DishWasher;
