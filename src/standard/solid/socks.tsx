import React from "react";
const Socks: React.FC<
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
        d="M21.25 5.75v-2a1.5 1.5 0 0 0-1.5-1.5h-5.5a1.5 1.5 0 0 0-1.5 1.5v2zm-8.5 5.941v-4.69h8.5v4.257a3.75 3.75 0 0 0-2.375 6.42l-1.82 1.816-6.048-6.048zm6.5 3.31a2.25 2.25 0 0 1 2-2.237v.576a4.75 4.75 0 0 1-1.313 3.279A2.24 2.24 0 0 1 19.25 15m-9.3-.49a4.27 4.27 0 0 0 .052 5.988 4.276 4.276 0 0 0 5.99.054z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 7H6.75v4.69l-1.743 1.756 2.664 2.665c.23-.901.69-1.755 1.38-2.47l2.449-2.465zM7.534 18.095 3.95 14.511a4.27 4.27 0 0 0 .052 5.988 4.28 4.28 0 0 0 5.002.766 5.5 5.5 0 0 1-1.47-3.17M11.5 5.75v-3.5H8.25a1.5 1.5 0 0 0-1.5 1.5v2z"
      />
    </svg>
  );
};
export default Socks;
