import React from "react";
const Highlighter: React.FC<
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
        d="m14.09 2.594 8.826 8.826-5.002 5.001L9.09 7.596zm-5.182 6.59L7.38 10.712c.162.393.216 1.11.162 1.453-.107.677-.472 1.68-1.598 2.808l-.53.53 4.59 4.59.53-.53c1.126-1.127 2.13-1.492 2.807-1.599.344-.054.974 0 1.453.162l1.528-1.528zM1.081 21.405l4.174-4.291 3.128 3.127-1.227 1.164z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Highlighter;
