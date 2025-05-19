import React from "react";
const Bus_01: React.FC<
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
        d="M7 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M1.5 11.5a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v1.5a1 1 0 0 0 1 1m21 0a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v1.5a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1C7.427 1 4.73 3.239 3.692 4.326 3.19 4.852 3 5.526 3 6.14V17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V6.14c0-.613-.19-1.288-.692-1.814C19.27 3.239 16.573 1 12 1M5 6.75v6.731c2.115.505 4.342.769 6.5.769 2.172 0 5.189-.327 7.5-.798V6.75zm.75 10a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm5.251 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm6.749 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bus_01;
