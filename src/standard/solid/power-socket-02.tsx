import React from "react";
const PowerSocket_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM5.25 10c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 17 15.75H7A1.75 1.75 0 0 1 5.25 14zm3.25 2a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H9.5a1 1 0 0 1-1-1m4.991 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PowerSocket_02;
