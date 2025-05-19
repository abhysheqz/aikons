import React from "react";
const SortingUp: React.FC<
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
        strokeWidth={1.5}
        d="M6 8.513h12M3 12.51h18M7.996 21.502v-6.006M5.5 18.006l2.487-2.519 2.513 2.516M15.996 21.502v-6.006m-2.496 2.51 2.487-2.519 2.513 2.516M11.996 8.513V2.507M9.5 5.017l2.487-2.52L14.5 5.014"
      />
    </svg>
  );
};
export default SortingUp;
