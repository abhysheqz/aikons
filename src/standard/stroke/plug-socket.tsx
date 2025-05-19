import React from "react";
const PlugSocket: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.5 4.5 2-2M2.5 21.5l2-2M11.793 16.293l-4.586-4.586a1 1 0 0 0-1.414 0L3.5 14v3.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 0 6.328 20H9.5l2.293-2.293a1 1 0 0 0 0-1.414M12.207 6.293a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0L20.5 10V6.828a2 2 0 0 0-.586-1.414l-.828-.828A2 2 0 0 0 17.672 4H14.5zM8.5 12.5l2-2m1 5 2-2"
      />
    </svg>
  );
};
export default PlugSocket;
