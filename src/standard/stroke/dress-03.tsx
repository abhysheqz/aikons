import React from "react";
const Dress_03: React.FC<
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
        d="m12 6 2.317-1.545a1 1 0 0 1 1.262.125l.911.91a1 1 0 0 1 .188 1.155l-1.402 2.802a1 1 0 0 1-.894.553H9.618a1 1 0 0 1-.895-.553l-1.4-2.802a1 1 0 0 1 .186-1.155l.91-.91a1 1 0 0 1 1.263-.125zM9 4V2M15 4V2M9.5 10h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 19c2 0 3-2 3-2-3.6-2.34-5.333-5.374-6-7H9c-.667 1.626-2.4 4.66-6 7 0 0 1 2 3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.705 14c.247.579 2.077 2.885 3.68 4.73.818.943.61 2.344-.596 2.666-1.34.359-3.042.604-4.79.604-1.747 0-3.448-.245-4.788-.604-1.205-.322-1.414-1.723-.596-2.665 1.603-1.846 3.432-4.152 3.679-4.731"
      />
    </svg>
  );
};
export default Dress_03;
