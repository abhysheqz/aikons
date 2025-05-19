import React from "react";
const HotTube: React.FC<
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
        d="M22 13.25v1.5h-1.434l-2 7H5.434l-2-7H2v-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.96 9.021a2.563 2.563 0 0 1 0-3.542l1.08 1.042a1.063 1.063 0 0 0 0 1.458 2.563 2.563 0 0 1 0 3.542l-1.08-1.042c.386-.4.386-1.058 0-1.458m3 0a2.563 2.563 0 0 1 0-3.542l1.08 1.042a1.063 1.063 0 0 0 0 1.458 2.563 2.563 0 0 1 0 3.542l-1.08-1.042c.386-.4.386-1.058 0-1.458"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5 8.75a.75.75 0 0 0-.75.75v2.25h7.088L9.631 9.094A.75.75 0 0 0 9 8.75z"
      />
    </svg>
  );
};
export default HotTube;
