import React from "react";
const Obtuse: React.FC<
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
        d="M2.052 3.684a1 1 0 0 1 1.265-.632l3 1a1 1 0 0 1-.633 1.897l-.71-.237 2.257 4.514A7.001 7.001 0 0 1 15.93 16h3.22l-.274-.219a1 1 0 1 1 1.249-1.562l2.5 2a1 1 0 0 1 0 1.562l-2.5 2a1 1 0 1 1-1.25-1.562L19.15 18h-8.413a3 3 0 0 1-2.683-1.658L3.186 6.607l-.237.71a1 1 0 1 1-1.897-.633z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Obtuse;
