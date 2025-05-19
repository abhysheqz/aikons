import React from "react";
const BitcoinDown_01: React.FC<
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
        d="M12.25 1a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M13 4.75a.75.75 0 0 0-1.5 0V5h-1.25a.75.75 0 0 0 0 1.5h.25V10h-.25a.75.75 0 0 0 0 1.5h1.25v.25a.75.75 0 0 0 1.5 0v-.25a2 2 0 0 0 1.561-3.25A2 2 0 0 0 13 5zM12 7.5v-1h1a.5.5 0 0 1 0 1zM12 9h1a.5.5 0 0 1 0 1h-1zM12.25 16.25a1 1 0 0 1 1 1v2.086l.793-.793a1 1 0 0 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 1 1 1.414-1.414l.793.793V17.25a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinDown_01;
