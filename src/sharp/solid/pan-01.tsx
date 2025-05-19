import React from "react";
const Pan_01: React.FC<
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
        d="M5.091 22.091a2.25 2.25 0 1 1-3.182-3.182l4.29-4.29a9.8 9.8 0 0 0 1.407 1.775 9.8 9.8 0 0 0 1.775 1.407zM8.666 3.667a8.25 8.25 0 1 1 11.668 11.667A8.25 8.25 0 0 1 8.666 3.667m8.132 3.535a3.25 3.25 0 1 0-4.596 4.596 3.25 3.25 0 0 0 4.596-4.596m-5.657-1.06a4.75 4.75 0 1 1 6.718 6.717 4.75 4.75 0 0 1-6.718-6.718"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pan_01;
