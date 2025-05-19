import React from "react";
const AnalyticsDown: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm15.5 13v2h-1.5v-2zm-5 2v-3h-1.5v3zm-5-5v5h-1.5v-5zM5.813 7.172c2.777 2.777 5.752 3.897 8.04 4.317.717.131 1.365.194 1.92.219l-1.121 1.12 1.06 1.06 3.006-3.004-3.005-3.005-1.06 1.06 1.272 1.274c-.51-.019-1.12-.074-1.8-.2C12.081 9.64 9.4 8.638 6.873 6.112z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AnalyticsDown;
