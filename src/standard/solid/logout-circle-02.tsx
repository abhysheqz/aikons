import React from "react";
const LogoutCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M17.25 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm-5.719-.04a.75.75 0 0 0-1.281.53v1.76H7a.75.75 0 0 0 0 1.5h3.25v1.74a.75.75 0 0 0 1.28.532l2.5-2.49a.75.75 0 0 0 .001-1.061z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LogoutCircle_02;
