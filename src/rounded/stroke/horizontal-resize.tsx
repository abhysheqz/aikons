import React from "react";
const HorizontalResize: React.FC<
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
        d="M10 20V4M14 20V4M10 12H6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12.05c-.03-1.035 4.008-3.47 4.389-2.987.431.548-.6 2.177-.832 2.695-.14.312-.136.448.023.76.717 1.406 1.075 2.11.856 2.414l-.002.003C6.08 15.42 2.03 13.061 2 12.05ZM22 11.95c.03 1.035-4.008 3.47-4.389 2.987-.431-.548.6-2.177.832-2.695.14-.312.136-.448-.023-.76-.717-1.406-1.075-2.11-.856-2.414l.002-.003C17.92 8.58 21.97 10.939 22 11.95Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12h-4"
      />
    </svg>
  );
};
export default HorizontalResize;
