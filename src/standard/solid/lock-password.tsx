import React from "react";
const LockPassword: React.FC<
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
        d="M12 3.249a3.5 3.5 0 0 0-3.5 3.5v1.502h7V6.749a3.5 3.5 0 0 0-3.5-3.5m-5.5 3.5v1.502H6a2.75 2.75 0 0 0-2.75 2.75l.001 9A2.75 2.75 0 0 0 6 22.751H18a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 18 8.251h-.5V6.749a5.5 5.5 0 1 0-11 0M17 15.491a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockPassword;
