import React from "react";
const Door_01: React.FC<
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
        d="M5 5.26v13.48a1 1 0 0 0 .732.963l7 1.945A1 1 0 0 0 14 20.684V3.316a1 1 0 0 0-1.268-.964l-7 1.945A1 1 0 0 0 5 5.26Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4v16h5V5a1 1 0 0 0-1-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13v-2M19 20h3M2 20h4.5"
      />
    </svg>
  );
};
export default Door_01;
