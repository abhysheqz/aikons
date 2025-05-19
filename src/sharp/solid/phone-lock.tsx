import React from "react";
const PhoneLock: React.FC<
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
        d="M19.25 10.75V10a2.25 2.25 0 0 0-4.5 0v.75h-1.5v5.5h7.5v-5.5zm-3-.75a.75.75 0 1 1 1.5 0v.75h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 1.25H3.25v21.5h14.5V17.5h-1.933V19H5.183V3.203H7.97l.483.977h4.095l.484-.977h2.786V6.5h1.933z"
      />
    </svg>
  );
};
export default PhoneLock;
