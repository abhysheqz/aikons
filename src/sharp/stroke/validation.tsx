import React from "react";
const Validation: React.FC<
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
        d="M15.985 16.893A7.145 7.145 0 0 1 9.14 22c-3.944 0-7.141-3.202-7.141-7.15a7.15 7.15 0 0 1 5.1-6.854"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6.494 14.999 1.748 2 3.747-4.001M17.606 8.577l1.052-.696c.715-.497 1.378-.727 1.877-.978.465-.233 1.033-.8 1.24-1.237.575-1.517-.097-2.34-.349-2.723-1.115-1.29-2.722-1.063-3.483-.455-.576.41-.861.98-1.144 1.575-.448 1.148-1.03 1.69-1.32 2.384m-4.05-1.88-1.401 1.418a.05.05 0 0 0 0 .07l7.919 7.934c.02.02.05.02.07 0l1.416-1.417-1.803-3.97-2.216-2.221z"
      />
    </svg>
  );
};
export default Validation;
