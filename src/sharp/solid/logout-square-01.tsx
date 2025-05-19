import React from "react";
const LogoutSquare_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM17.414 12l-3.707-3.707-1.414 1.414L13.586 11H8v2h5.586l-1.293 1.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LogoutSquare_01;
