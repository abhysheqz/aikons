import React from "react";
const Briefcase_09: React.FC<
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
        d="M7 12v9m10-9v9M3 12h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2.5 13.75c0-3.653 0-5.48 1.113-6.615S6.517 6 10.1 6h3.8c3.583 0 5.374 0 6.487 1.135S21.5 10.097 21.5 13.75s0 5.48-1.113 6.615S17.483 21.5 13.9 21.5h-3.8c-3.583 0-5.374 0-6.487-1.135S2.5 17.403 2.5 13.75Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.5 6-.1-.31c-.494-1.54-.742-2.31-1.331-2.75-.59-.44-1.372-.44-2.937-.44h-.264c-1.565 0-2.348 0-2.937.44-.59.44-.837 1.21-1.332 2.75L7.5 6"
      />
    </svg>
  );
};
export default Briefcase_09;
