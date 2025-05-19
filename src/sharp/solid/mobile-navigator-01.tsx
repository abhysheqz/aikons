import React from "react";
const MobileNavigator_01: React.FC<
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
        d="M10.5 10c0-.828.669-1.5 1.493-1.5h.014c.824 0 1.493.672 1.493 1.5s-.669 1.5-1.493 1.5h-.014A1.497 1.497 0 0 1 10.5 10"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM12 15.225s-.44-.205-.493-.232a9.305 9.305 0 0 1-1.745-1.173C8.825 13.016 7.75 11.726 7.75 10c0-2.382 1.883-4.35 4.25-4.35s4.25 1.968 4.25 4.35c0 1.727-1.075 3.017-2.012 3.82a9.3 9.3 0 0 1-1.745 1.173c-.053.027-.493.232-.493.232m-1.5 3.025v1.5h3v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileNavigator_01;
