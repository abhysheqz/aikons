import React from "react";
const Libraries: React.FC<
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
        d="M6 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m6 3H9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m2.13 1.335 3.144-1.263a1 1 0 0 1 1.322.612l3.35 9.912a1.01 1.01 0 0 1-.625 1.276l-3.124 1.073a1 1 0 0 1-1.272-.621L13.555 9.6a1.01 1.01 0 0 1 .576-1.266"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Libraries;
