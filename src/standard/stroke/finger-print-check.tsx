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
        fill="currentColor"
        d="M16.53 17.47a.75.75 0 1 0-1.06 1.06zM17 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47a4.75 4.75 0 0 0-4.75-4.75v1.5A3.25 3.25 0 0 1 20.75 18zm-4.75-4.75A4.75 4.75 0 0 0 12.75 18h1.5a3.25 3.25 0 0 1 3.25-3.25zM12.75 18a4.75 4.75 0 0 0 4.75 4.75v-1.5A3.25 3.25 0 0 1 14.25 18zm4.75 4.75A4.75 4.75 0 0 0 22.25 18h-1.5a3.25 3.25 0 0 1-3.25 3.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.929 20.606C3.856 19.198 2.5 16.858 2.5 14.21V9.758c0-1.185.271-2.308.757-3.314m6.1 15.48A8 8 0 0 0 12 21.849m5.73-15.431C15.636 2.124 9.9.664 5.93 3.362M18.5 9.5V11m-8-5c2.21 0 4 1.88 4 4.2M6.885 8.4a4.4 4.4 0 0 0-.385 1.8v3.6c0 2.32 1.79 4.2 4 4.2q.255 0 .5-.032m-.5-7.468v3"
      />
    </svg>
  );
};
export default FingerPrintCheck;
