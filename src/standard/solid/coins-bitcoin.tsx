import React from "react";
const CoinsBitcoin: React.FC<
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
        d="M3.314 7.822c.134-.146.368-.016.335.18A10.3 10.3 0 0 0 3.5 9.75C3.5 15.411 8.09 20 13.75 20q.895 0 1.748-.148c.196-.034.326.2.18.334A8.75 8.75 0 0 1 3.314 7.822"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 1a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m.75 4.75a.75.75 0 0 0-1.5 0V6h-1.75a.75.75 0 0 0 0 1.5h.25V12h-.25a.75.75 0 0 0 0 1.5H13v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 14.75 6h-.25zM13 9V7.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsBitcoin;
