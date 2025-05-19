import React from "react";
const ScreenAddToHome_02: React.FC<
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
        d="M20.75 1.25H6.25V7h1.933V3.203h2.786l.484.977h4.094l.484-.977h2.786V19H8.183v-2H6.25v5.75h14.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 8h7v7h-2v-3.586L4.664 17 3.25 15.586 8.836 10H5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ScreenAddToHome_02;
