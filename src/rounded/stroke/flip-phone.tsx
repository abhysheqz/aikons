import React from "react";
const FlipPhone: React.FC<
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
        d="M14.5 4h-9v11.5a6.5 6.5 0 1 0 13 0V8c0-1.886 0-2.828-.586-3.414S16.386 4 14.5 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 18h2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 8.429c0-.4 0-.599.056-.76a1 1 0 0 1 .614-.613C9.33 7 9.53 7 9.929 7h4.142c.4 0 .599 0 .76.056a1 1 0 0 1 .613.614c.056.16.056.36.056.759V9c0 .464 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078C13.197 12 12.464 12 12 12s-1.197 0-1.391-.03A2.5 2.5 0 0 1 8.53 9.89C8.5 9.697 8.5 9.464 8.5 9z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 4V2"
      />
    </svg>
  );
};
export default FlipPhone;
