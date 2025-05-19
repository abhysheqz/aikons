import React from "react";
const Dumbbell_03: React.FC<
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
        d="M6.5 3v8m11-8v8M6.5 13v8m11-8v8M4 7H2m18 0h2M6.5 7h11M4 17H2m18 0h2M6.5 17h11M4 4.5v5m16-5v5M4 14.5v5m16-5v5"
      />
    </svg>
  );
};
export default Dumbbell_03;
