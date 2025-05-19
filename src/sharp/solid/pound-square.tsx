import React from "react";
const PoundSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.225 8c0-1.102.897-2 2.01-2 1.114 0 2.011.898 2.011 2h1.5c0-1.936-1.574-3.5-3.51-3.5a3.505 3.505 0 0 0-3.511 3.5c0 .744.232 1.433.629 2H8v1.5h2.09c-.542.96-1.2 1.728-1.935 2.07a.75.75 0 0 0 .316 1.43h5.986a2 2 0 0 0 .2-.012c.126-.012.297-.035.493-.08.382-.09.915-.277 1.36-.692l-1.02-1.099c-.182.169-.434.272-.68.33a2 2 0 0 1-.368.053h-3.899c.5-.61.909-1.313 1.235-2h1.556v-1.5h-1.098a2.005 2.005 0 0 1-2.011-2m4.207 6.255v.745z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundSquare;
