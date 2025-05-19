import React from "react";
const WebflowRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm15.48 6.947.195-.98-1.96-.393-.197.98c-.154.772-.51 2.053-1.062 3.323-.267.616-.569 1.2-.898 1.712l-1.082-5.047-1.942-.054c-.236.864-.714 2.25-1.367 3.552a12 12 0 0 1-.958 1.616L8.347 7.87l-1.98.283 1.355 9.48 1.291-.774c1.262-.758 2.243-2.279 2.942-3.672q.15-.3.289-.602l1.116 5.208 1.263-1.011c1.192-.954 2.064-2.468 2.668-3.857a19.6 19.6 0 0 0 1.188-3.728"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebflowRectangle;
