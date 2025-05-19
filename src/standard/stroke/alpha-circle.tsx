import React from "react";
const AlphaCircle: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8c0 3-1.2 8-4.184 8C8.985 16 7.5 14.21 7.5 12s1.485-4 3.316-4C15 8 13 16 15.5 16c.532 0 1-.444 1-.889"
      />
    </svg>
  );
};
export default AlphaCircle;
