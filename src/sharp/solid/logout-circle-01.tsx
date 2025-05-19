import React from "react";
const LogoutCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M17.414 12l-3.707-3.707-1.414 1.414L13.586 11H8v2h5.586l-1.293 1.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LogoutCircle_01;
