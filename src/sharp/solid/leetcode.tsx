import React from "react";
const Leetcode: React.FC<
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
        d="M10 12h11v2.016H10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.828 4.942 2-2.016L14.414 1.5 3 13.008l9.414 9.492 5.414-5.459-1.414-1.426-4 4.033-6.586-6.64 6.586-6.64 4 4.033 1.414-1.426z"
      />
    </svg>
  );
};
export default Leetcode;
