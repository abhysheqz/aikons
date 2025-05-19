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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 8.5H6M21 12.5H3M16 21.5v-6m0 0 2 2m-2-2-2 2M12 8.5v-6m0 0 2 2m-2-2-2 2M8 21.5v-6m0 0 2 2m-2-2-2 2"
      />
    </svg>
  );
};
export default SortingUp;
