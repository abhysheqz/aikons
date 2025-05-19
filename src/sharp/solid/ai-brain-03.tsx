import React from "react";
const AiBrain_03: React.FC<
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
        d="M9.5 22.75a3.24 3.24 0 0 0 2.5-1.173 3.251 3.251 0 0 0 5.677-1.388 3.75 3.75 0 0 0 2.909-4.79 3.75 3.75 0 0 0 0-6.798 3.751 3.751 0 0 0-2.909-4.79A3.251 3.251 0 0 0 12 2.423a3.251 3.251 0 0 0-5.677 1.388A3.75 3.75 0 0 0 3.414 8.6a3.75 3.75 0 0 0 0 6.798 3.751 3.751 0 0 0 2.909 4.79 3.25 3.25 0 0 0 3.177 2.56m1.373-15H9.268l-2.737 7.184 1.402.534.769-2.018h2.737l.77 2.018 1.4-.534zm-.005 4.2H9.273l.797-2.093zm5.381 3.3v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_03;
