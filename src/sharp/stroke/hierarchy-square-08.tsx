import React from "react";
const HierarchySquare_08: React.FC<
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
        d="M5.501 9.6c.967 0 1.75-.806 1.75-1.8S6.468 6 5.501 6c-.966 0-1.75.806-1.75 1.8s.784 1.8 1.75 1.8Zm0 0a3.5 3.5 0 0 1 3.5 3.5v.9H7.502l-1 4h-2l-1-4h-1.5v-.9c0-1.933 1.566-3.5 3.5-3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 22v-6h-6v6zM22 8V2h-6v6zM16 5h-4v14h4"
      />
    </svg>
  );
};
export default HierarchySquare_08;
