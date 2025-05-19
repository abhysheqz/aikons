import React from "react";
const Fan_01: React.FC<
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
        d="M9.414 12.28c-1.804-.216-4.293-.178-6.438 1.06 0 0-1.232 1.866.268 4.464 2 3.464 5.598 3.696 5.598 3.696-.568-1.516-.485-4.88 1.335-7.193a2.5 2.5 0 0 1-.763-2.026ZM14.281 13.277a2.5 2.5 0 0 1-1.665 1.62c.713 1.673 1.992 3.822 4.145 5.066 0 0 2.232.134 3.732-2.465 2-3.464.402-6.696.402-6.696-.995 1.21-3.795 2.757-6.614 2.475ZM11.383 10.054q.253-.054.521-.054c.643 0 1.229.242 1.672.64 1.096-1.454 2.328-3.643 2.328-6.14 0 0-1-2-4-2-4 0-6 3-6 3 1.558.26 4.33 1.935 5.48 4.554Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.404 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default Fan_01;
