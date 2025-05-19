import React from "react";
const PhoneErase: React.FC<
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
        d="m14.336 8.086 2.5 2.5 2.5-2.5L20.75 9.5l-2.5 2.5 2.5 2.5-1.414 1.414-2.5-2.5-2.5 2.5-1.414-1.414 2.5-2.5-2.5-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 1.25H3.25v21.5h14.5V16.5h-1.933V19H5.183V3.203H7.97l.484.977h4.094l.484-.977h2.786V7.5h1.933z"
      />
    </svg>
  );
};
export default PhoneErase;
