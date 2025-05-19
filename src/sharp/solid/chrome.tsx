import React from "react";
const Chrome: React.FC<
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
        d="M2.622 6.74A10.7 10.7 0 0 0 1.25 12c0 4.914 3.297 9.058 7.8 10.34l3.384-5.358a4.998 4.998 0 0 1-4.747-2.45zM3.861 4.977l3.445 5.298A5 5 0 0 1 12 7h9.519a10.75 10.75 0 0 0-9.52-5.75 10.73 10.73 0 0 0-8.138 3.727M22.326 9H16c.628.836 1 1.874 1 3 0 .806-.19 1.567-.53 2.241a1 1 0 0 1-.124.293l-5.17 8.185q.408.03.824.031c5.937 0 10.75-4.813 10.75-10.75 0-1.041-.148-2.048-.424-3"
      />
      <path fill="currentColor" d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
    </svg>
  );
};
export default Chrome;
