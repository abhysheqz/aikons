import React from "react";
const MouseLeftClick_01: React.FC<
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
        d="M2.25 5.777C2.52 4.06 3.33 2.513 4.506 1.25L5.97 2.614c-.932 1-1.542 2.19-1.743 3.473z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 1.266V5.25H12a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h.75V12h1.5v-1.25H15a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-.75V1.266c.706.028 1.4.094 2.077.178 2.799.345 4.962 2.666 5.18 5.408.132 1.663.243 3.386.243 5.148s-.11 3.485-.243 5.148c-.218 2.742-2.381 5.063-5.18 5.408-.916.113-1.861.194-2.827.194s-1.911-.081-2.827-.194c-2.799-.345-4.962-2.666-5.18-5.408-.132-1.663-.243-3.386-.243-5.148s.11-3.485.243-5.148c.218-2.742 2.381-5.063 5.18-5.408.678-.084 1.371-.15 2.077-.178"
      />
      <path fill="currentColor" d="M12.75 6.75h1.5v2.5h-1.5z" />
    </svg>
  );
};
export default MouseLeftClick_01;
