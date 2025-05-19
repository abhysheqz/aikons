import React from "react";
const Fencing: React.FC<
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
        d="M9.026 13.974C7.84 12.79 6.038 12.668 5 13.706L9.294 18c1.038-1.038.917-2.84-.268-4.026Zm0 0L20 3M7.366 16.072l-3.168 4.533c-1.004 1.239-3.074-.738-1.791-1.786l4.472-3.234M14.974 13.974c1.186-1.185 2.988-1.306 4.026-.268L14.706 18c-1.038-1.038-.917-2.84.268-4.026Zm0 0L4 3m12.634 13.072 3.168 4.533c1.004 1.239 3.074-.738 1.791-1.786l-4.472-3.234"
      />
    </svg>
  );
};
export default Fencing;
