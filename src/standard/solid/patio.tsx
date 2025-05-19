import React from "react";
const Patio: React.FC<
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
        d="M2.945 14.168A1 1 0 0 1 3.5 14h17a1 1 0 0 1 .555.168l1.5 1a1 1 0 0 1-1.11 1.664L20.197 16H3.803l-1.248.832a1 1 0 0 1-1.11-1.664zM2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a7 7 0 0 0-7 7v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a7 7 0 0 0-7-7m-1.563 2.25A5 5 0 0 1 12 3c.546 0 1.071.087 1.563.25L12 5.332zM8.689 4.252A5 5 0 0 0 7.416 6H10zM7 8v6h10V8zm9.585-2a5 5 0 0 0-1.274-1.747L14 6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.75 14H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3.75zm1.5 9h3.5v-9h-3.5zm5-9v9H19a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Patio;
