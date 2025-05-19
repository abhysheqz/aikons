import React from "react";
const AiSecurity_03: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m12 8.5.275.743a4.2 4.2 0 0 0 2.482 2.482L15.5 12l-.743.275a4.2 4.2 0 0 0-2.482 2.482L12 15.5l-.275-.743a4.2 4.2 0 0 0-2.482-2.482L8.5 12l.743-.275a4.2 4.2 0 0 0 2.482-2.482z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.907 5.284c2.964.214 4.876-2.787 8.12-2.787 3.194-.064 4.757 2.827 8.032 2.827 1.756 8.937-1.897 14.55-8.006 16.172C6.39 20.15 2.135 14.48 3.907 5.284Z"
      />
    </svg>
  );
};
export default AiSecurity_03;
