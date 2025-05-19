import React from "react";
const GoogleDrive: React.FC<
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
        d="M8.3 2.988 1.25 14.973l3.022 5.993 7.27-12.344.036-.054zM9.617 2.25h6.038l7.06 12h-6.05zM22.749 15.75H9.169l-.072-.004-3.536 6.004h14.162zM9.979 14.25l2.47-4.196 2.465 4.196z"
      />
    </svg>
  );
};
export default GoogleDrive;
