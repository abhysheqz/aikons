import React from "react";
const WorkAlert: React.FC<
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
        d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135.857.873 1.054 2.156 1.1 4.365"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.5 19.525h.008m0-2.025v-2.025M22 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 5.5-.1-.31c-.494-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.632 2h-.264c-1.565 0-2.348 0-2.937.44-.59.44-.837 1.21-1.332 2.75L7 5.5"
      />
    </svg>
  );
};
export default WorkAlert;
