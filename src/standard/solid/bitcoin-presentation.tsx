import React from "react";
const BitcoinPresentation: React.FC<
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
        d="M1 2.75A.75.75 0 0 1 1.75 2h20a.75.75 0 0 1 0 1.5h-.25v12.75A2.75 2.75 0 0 1 18.75 19H12.5v2.25a.75.75 0 0 1-1.5 0V19H4.75A2.75 2.75 0 0 1 2 16.25V3.5h-.25A.75.75 0 0 1 1 2.75M13.75 8a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-5.5-6a.75.75 0 0 1 .75.75V7h.25a2.25 2.25 0 0 1 1.677 3.75A2.25 2.25 0 0 1 9.25 14.5H9v.25a.75.75 0 0 1-1.5 0v-.25H5.75a.75.75 0 0 1 0-1.5H6V8.5h-.25a.75.75 0 0 1 0-1.5H7.5v-.25A.75.75 0 0 1 8.25 6M7.5 8.5V10h1.75a.75.75 0 0 0 0-1.5zm1.75 3H7.5V13h1.75a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinPresentation;
