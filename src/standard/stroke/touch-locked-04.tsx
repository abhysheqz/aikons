import React from "react";
const TouchLocked_04: React.FC<
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
        d="M7 14v-4m0 0V3.75a1.75 1.75 0 1 1 3.5 0V10h5c1.044 0 2 .5 2.5 1M7 10l-1.27 1.356c-.953 1.089-1.43 1.633-1.614 2.279A3 3 0 0 0 4 14.53c.016.671.115 1.285.986 2.613l1.921 2.949A2 2 0 0 0 8.584 21H11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M14 17h6v5h-6z"
      />
    </svg>
  );
};
export default TouchLocked_04;
