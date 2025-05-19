import React from "react";
const Saturn_02: React.FC<
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
        strokeWidth={1.5}
        d="M22 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.636 18.364A9 9 0 0 1 16.5 4.204m-8 16.09a9 9 0 0 0 12.397-9.663"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.173 6.38c.895-1.86 1.104-3.307.428-3.982-.874-.872-3.037-.267-5.714 1.387m2.418 7.045a44 44 0 0 1-3.516 3.954c-5.302 5.303-10.85 8.355-12.39 6.818-.877-.876-.265-3.051 1.403-5.742"
      />
    </svg>
  );
};
export default Saturn_02;
