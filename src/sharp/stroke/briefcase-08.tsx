import React from "react";
const Briefcase_08: React.FC<
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
        d="M3.5 10.5v11h17v-11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.15 4h5.7M19 4h2.5v3.5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5V4H5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 2.5h4v3H5zM15 2.5h4v3h-4zM7 18h3"
      />
    </svg>
  );
};
export default Briefcase_08;
