import React from "react";
const RealEstate_01: React.FC<
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
        d="M1 20.75h22v2H1zM9 8h6v2H9zm0 6h6v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 2a.75.75 0 0 0-1.045-.69L2.25 4.506V22c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75zM7.501 7H5.492v2h2.01zm0 4H5.492v2h2.01zm0 4H5.492v2h2.01zM14.295 1.31A.75.75 0 0 0 13.25 2v20c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V4.505zM18.501 7h-2.009v2h2.01zm0 4h-2.009v2h2.01zm0 4h-2.009v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RealEstate_01;
