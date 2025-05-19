import React from "react";
const Settings_05: React.FC<
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
        d="M21 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25zM10.75 9.5H17v-2h-6.25V6.25h-4.5v4.5h4.5zm7 3.75v4.5h-4.5V16.5H7v-2h6.25v-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Settings_05;
