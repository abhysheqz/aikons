import React from "react";
const Settings_04: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM9.5 13.25V7h-2v6.25H6.25v4.5h4.5v-4.5zm3.75-7h4.5v4.5H16.5V17h-2v-6.25h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Settings_04;
