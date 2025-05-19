import React from "react";
const PowerSocket_01: React.FC<
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
        d="M17.024 1.905c-1.278-.155-3.004-.155-5.075-.155s-3.695 0-4.973.155c-1.306.159-2.351.49-3.21 1.223a6 6 0 0 0-.638.638c-.734.859-1.064 1.904-1.223 3.21C1.75 8.254 1.75 9.98 1.75 12.05s0 3.695.155 4.973c.159 1.306.49 2.351 1.223 3.21q.293.345.638.638c.859.734 1.904 1.064 3.21 1.223 1.278.155 3.004.155 5.075.155s3.695 0 4.973-.155c1.306-.159 2.351-.49 3.21-1.223q.345-.293.638-.638c.734-.859 1.064-1.904 1.223-3.21.155-1.278.155-2.901.155-4.973s0-3.797-.155-5.075c-.159-1.306-.49-2.351-1.223-3.21a6 6 0 0 0-.638-.638c-.859-.734-1.904-1.064-3.21-1.223M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H9.5a1 1 0 0 1-1-1m4.991 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PowerSocket_01;
