import React from "react";
const CallBlocked: React.FC<
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
      viewBox="0 0 25 26"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.497 5.106a2 2 0 0 0-3.203-.52L3.861 6.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.858L23.707 23a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.375L13.45 21.43a16.08 16.08 0 0 1-6.586-6.585l3.317-3.317a2 2 0 0 0 .374-2.309zm10.485-.793a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5c0-.464.105-.902.293-1.294l4 4.001a3 3 0 0 1-4.293-2.708m5.708 1.293-4.001-4.001a3 3 0 0 1 4.001 4.001"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallBlocked;
