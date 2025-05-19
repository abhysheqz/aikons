import React from "react";
const CircleArrowDown_03: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M11.998 22.75c-5.937 0-10.75-4.813-10.75-10.75S6.061 1.25 11.998 1.25 22.748 6.063 22.748 12s-4.813 10.75-10.75 10.75m-4-6.875v1.5h8v-1.5zm1.53-5.78-1.06 1.06 3.53 3.53 3.53-3.53-1.06-1.06-1.72 1.719v-5.19h-1.5v5.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDown_03;
