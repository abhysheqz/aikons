import React from "react";
const DoNotTouch_02: React.FC<
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
        strokeWidth={1.5}
        d="m2.001 2 20 20M11.23 6c0-.828-.692-1.5-1.546-1.5-.418 0-.798.162-1.076.424M11.23 6V4c0-.828.692-1.5 1.545-1.5.854 0 1.545.672 1.545 1.5v2m-3.09 0v1.546M14.32 6c0-.828.692-1.5 1.546-1.5.853 0 1.545.672 1.545 1.5v2m-3.09-2v4.5M17.41 8c0-.828.692-1.5 1.546-1.5.853 0 1.545.672 1.545 1.5v8.819M17.412 8v2.5m2.361 9.302a4 4 0 0 1-3.271 1.698h-7.5L3.85 14.549a1.66 1.66 0 0 1 .033-2.073 1.77 1.77 0 0 1 2.586-.14l1.67 1.627V8.137"
      />
    </svg>
  );
};
export default DoNotTouch_02;
