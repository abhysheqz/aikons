import React from "react";
const FingerPrintCheck: React.FC<
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
        d="M5.929 20.606C3.856 19.198 2.5 16.858 2.5 14.21V9.758c0-1.185.271-2.308.757-3.314m6.1 15.48A8 8 0 0 0 12 21.849m5.73-15.431C15.636 2.124 9.9.664 5.93 3.362M18.5 9.333V11.5m-8-5.5c2.21 0 4 1.88 4 4.2M6.885 8.4a4.4 4.4 0 0 0-.385 1.8v3.6c0 2.32 1.79 4.2 4 4.2q.255 0 .5-.032m-.5-7.468v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.738 17.735 1.279 1.273 2.319-2.33M21.5 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};
export default FingerPrintCheck;
