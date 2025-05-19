import React from "react";
const Pizza_03: React.FC<
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
        d="M12 12 4.636 7.75c-.717-.415-1.646-.172-1.948.599A10 10 0 0 0 2 12c0 1.289.244 2.52.688 3.652.302.77 1.231 1.013 1.948.6zm0 0 7.364 4.252c.717.414 1.646.172 1.948-.599A10 10 0 0 0 22 12.001c0-1.289-.244-2.521-.688-3.652-.302-.771-1.231-1.014-1.948-.6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12V3.5c0-.828-.675-1.512-1.495-1.39a10 10 0 0 0-6.32 3.65c-.518.648-.264 1.575.454 1.99zm0 0v8.5c0 .828.675 1.512 1.495 1.389a10 10 0 0 0 6.32-3.65c.518-.647.264-1.574-.454-1.989zM12 12V3.5c0-.828.675-1.512 1.495-1.39a10 10 0 0 1 6.32 3.65c.518.648.264 1.575-.454 1.99zm0 0v8.5c0 .828-.675 1.512-1.495 1.389a10 10 0 0 1-6.32-3.65c-.518-.647-.264-1.574.454-1.989zM15 5v.1M9.5 16v.1M6 12v.1M19 12v.1M14.5 8l1-.5M8 6.502l1-.5M8.5 19l1-.5M15 17.5l1 .5"
      />
    </svg>
  );
};
export default Pizza_03;
