import React from "react";
const Rain: React.FC<
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
        d="M16.598 2.685a1.6 1.6 0 0 1 1.804 0c.505.344 1.318.954 2.013 1.75.683.782 1.335 1.84 1.335 3.065a4.25 4.25 0 0 1-8.5 0c0-1.225.652-2.283 1.335-3.066.695-.795 1.508-1.405 2.013-1.749M5.598 2.685a1.6 1.6 0 0 1 1.804 0c.505.344 1.318.954 2.013 1.75.683.782 1.335 1.84 1.335 3.065a4.25 4.25 0 0 1-8.5 0c0-1.225.652-2.283 1.335-3.066.695-.795 1.508-1.405 2.013-1.749M11.098 12.685a1.6 1.6 0 0 1 1.804 0c.505.344 1.318.954 2.013 1.75.683.782 1.335 1.84 1.335 3.065a4.25 4.25 0 1 1-8.5 0c0-1.225.652-2.283 1.335-3.066.695-.795 1.508-1.405 2.013-1.749"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rain;
