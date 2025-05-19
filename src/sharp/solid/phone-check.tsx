import React from "react";
const PhoneCheck: React.FC<
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
        d="m20.75 9.047-6.674 7.203-3.826-3.786 1.372-1.357 2.394 2.369L19.32 7.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 1.25H3.25v21.5h14.5V16.5h-1.933V19H5.183V3.203H7.97l.484.977h4.094l.484-.977h2.786V7.5h1.933z"
      />
    </svg>
  );
};
export default PhoneCheck;
