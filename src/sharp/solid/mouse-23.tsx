import React from "react";
const Mouse_23: React.FC<
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
        d="M12 1.25c-.966 0-1.911.081-2.827.194-2.799.345-4.962 2.666-5.18 5.408C3.861 8.515 3.75 10.238 3.75 12s.11 3.485.243 5.148c.218 2.742 2.381 5.063 5.18 5.408.916.113 1.861.194 2.827.194s1.911-.081 2.827-.194c2.799-.345 4.962-2.666 5.18-5.408.132-1.663.243-3.386.243-5.148s-.11-3.485-.243-5.148c-.218-2.742-2.381-5.063-5.18-5.408A23 23 0 0 0 12 1.25M11 5v4h2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_23;
