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
        d="M20.334 3.666A8.25 8.25 0 1 0 8.666 15.334 8.25 8.25 0 0 0 20.334 3.666m-8.132 3.536a3.25 3.25 0 1 1 4.596 4.596 3.25 3.25 0 0 1-4.596-4.596m5.657-1.06a4.75 4.75 0 1 0-6.718 6.717 4.75 4.75 0 0 0 6.718-6.718"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.275 14.74c-.23.244-.478.47-.721.658l-3.175 2.256-.023.017a2.833 2.833 0 1 0 3.99 3.95l2.257-3.174c.188-.244.413-.492.657-.721a9.785 9.785 0 0 1-2.985-2.985"
      />
    </svg>
  );
};
export default Pan_01;
