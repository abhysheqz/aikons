import React from "react";
const PlusMinus: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6a2.75 2.75 0 0 0 2.75 2.75h6a2.75 2.75 0 0 0 2.75-2.75v-6A2.75 2.75 0 0 0 10.75 2zM8.5 5.75a.75.75 0 1 0-1.5 0V7H5.75a.75.75 0 0 0 0 1.5H7v1.25a.75.75 0 0 0 1.5 0V8.5h1.25a.75.75 0 1 0 0-1.5H8.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 18.75v-4h.75a4 4 0 0 0 4-4V10h4a2.75 2.75 0 0 1 2.75 2.75v6a2.75 2.75 0 0 1-2.75 2.75h-6A2.75 2.75 0 0 1 10 18.75M13.75 15a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinus;
