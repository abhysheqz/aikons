import React from "react";
const KeyframesMultiple: React.FC<
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
        fillRule="evenodd"
        d="M16.376 4.219a1 1 0 0 1 1.405.157l4.552 5.698a3.11 3.11 0 0 1 0 3.852l-4.552 5.698a1 1 0 0 1-1.562-1.248l4.551-5.699a1.11 1.11 0 0 0 0-1.354l-4.551-5.699a1 1 0 0 1 .157-1.405m-10.379.99a2.57 2.57 0 0 1 4.006 0l4.108 4.99a2.86 2.86 0 0 1 0 3.602l-4.108 4.99a2.57 2.57 0 0 1-4.006 0L1.89 13.8a2.86 2.86 0 0 1 0-3.602zm7.784-.833a1 1 0 1 0-1.562 1.248l4.551 5.699c.307.383.307.97 0 1.354l-4.551 5.699a1 1 0 1 0 1.562 1.248l4.552-5.698a3.11 3.11 0 0 0 0-3.852z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframesMultiple;
