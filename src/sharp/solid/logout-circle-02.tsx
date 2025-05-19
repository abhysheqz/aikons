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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M15 16h2V8h-2zm-.586-4-3.707-3.707-1.414 1.414L10.586 11H6v2h4.586l-1.293 1.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LogoutCircle_02;
