import React from "react";
const BitcoinCpu: React.FC<
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
        d="M8.5 1.75a.75.75 0 0 0-1.5 0V3H5.75A2.75 2.75 0 0 0 3 5.75V7H1.75a.75.75 0 0 0 0 1.5H3V11H1.75a.75.75 0 0 0 0 1.5H3V15H1.75a.75.75 0 0 0 0 1.5H3v1.25a2.75 2.75 0 0 0 2.75 2.75H7v1.25a.75.75 0 0 0 1.5 0V20.5H11v1.25a.75.75 0 0 0 1.5 0V20.5H15v1.25a.75.75 0 0 0 1.5 0V20.5h1.25a2.75 2.75 0 0 0 2.75-2.75V16.5h1.25a.75.75 0 0 0 0-1.5H20.5v-2.5h1.25a.75.75 0 0 0 0-1.5H20.5V8.5h1.25a.75.75 0 0 0 0-1.5H20.5V5.75A2.75 2.75 0 0 0 17.75 3H16.5V1.75a.75.75 0 0 0-1.5 0V3h-2.5V1.75a.75.75 0 0 0-1.5 0V3H8.5zM11.75 7a.75.75 0 0 1 .75.75V8h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75h-.25v.25a.75.75 0 0 1-1.5 0v-.25H9.25a.75.75 0 0 1 0-1.5h.25V9.5h-.25a.75.75 0 0 1 0-1.5H11v-.25a.75.75 0 0 1 .75-.75M11 9.5V11h1.75a.75.75 0 0 0 0-1.5zm1.75 3H11V14h1.75a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinCpu;
