import React from "react";
const BitcoinWithdraw: React.FC<
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
        d="M4 2a3 3 0 0 0-3 3v2c0 1.362.922 2.626 2.25 2.968a1 1 0 0 0 .5-1.936C3.352 7.93 3 7.502 3 7V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2c0 .502-.353.93-.75 1.032a1 1 0 0 0 .5 1.936C22.077 9.626 23 8.362 23 7V5a3 3 0 0 0-3-3zm1.25 5A.75.75 0 0 1 6 6.25h12a.75.75 0 0 1 .75.75v12A2.75 2.75 0 0 1 16 21.75H8A2.75 2.75 0 0 1 5.25 19zM12 9.25a.75.75 0 0 1 .75.75v.25H13A2.25 2.25 0 0 1 14.677 14 2.25 2.25 0 0 1 13 17.75h-.25V18a.75.75 0 0 1-1.5 0v-.25H9.5a.75.75 0 0 1 0-1.5h.25v-4.5H9.5a.75.75 0 0 1 0-1.5h1.75V10a.75.75 0 0 1 .75-.75m-.75 2.5v1.5H13a.75.75 0 0 0 0-1.5zm1.75 3h-1.75v1.5H13a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinWithdraw;
