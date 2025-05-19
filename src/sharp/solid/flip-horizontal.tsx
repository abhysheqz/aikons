import React from "react";
const FlipHorizontal: React.FC<
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
        d="M1.655 6.333a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 1.248 17V7a.75.75 0 0 1 .407-.667M22.341 6.333a.75.75 0 0 1 .407.667v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5a.75.75 0 0 1 .78-.057"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.998 7V3h2v4zm0 7v-4h2v4zm0 7v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipHorizontal;
