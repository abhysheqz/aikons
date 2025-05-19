import React from "react";
const SendToMobile_02: React.FC<
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
        d="M16.336 7.586 20.75 12l-4.414 4.414L14.922 15l1.966-1.966h-6.052v-2h6.12L14.921 9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 1.25H3.25v21.5h14.5V17.5h-1.933V19H5.183V3.203H7.97l.484.978h4.094l.484-.978h2.786V6.5h1.933z"
      />
    </svg>
  );
};
export default SendToMobile_02;
