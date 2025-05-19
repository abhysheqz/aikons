import React from "react";
const WifiDisconnected_01: React.FC<
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
        d="M12.494 14.42a1 1 0 0 1-.887 1.101c-.845.09-1.69.476-2.4 1.186a1 1 0 0 1-1.414-1.414c1.023-1.023 2.287-1.62 3.6-1.76a1 1 0 0 1 1.101.887M4.793 11.793c3.441-3.441 7.867-4.243 11.69-2.136a1 1 0 0 1-.966 1.751c-2.932-1.616-6.405-1.106-9.31 1.8a1 1 0 0 1-1.414-1.415"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.5c3.695 0 7.338 1.443 10.645 4.236a1 1 0 0 1-1.29 1.528C18.346 6.724 15.147 5.5 12 5.5S5.654 6.723 2.645 9.264a1 1 0 0 1-1.29-1.528C4.662 4.943 8.305 3.5 12 3.5M14.293 12.793a1 1 0 0 1 1.414 0L18 15.086l2.293-2.293a1 1 0 0 1 1.414 1.414L19.414 16.5l2.293 2.293a1 1 0 0 1-1.414 1.414L18 17.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiDisconnected_01;
