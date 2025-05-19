import React from "react";
const GoForwardSec_15: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 5 2-2.8q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.99 9.99 0 0 0-4-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.49 16.112V9.93a.1.1 0 0 0-.163-.078l-1.698 1.397m8.38-1.395h-2.914a.1.1 0 0 0-.098.08l-.529 2.302c-.02.09.088.164.17.12a3.07 3.07 0 0 1 1.661-.361c.697 0 1.157.398 1.41.709.183.225.257.511.29.8l.026.223c.041.358-.02.72-.178 1.043l-.014.03a2.06 2.06 0 0 1-1.635 1.147c-.884 0-1.38-.314-1.665-.955l-.033-.115"
      />
    </svg>
  );
};
export default GoForwardSec_15;
