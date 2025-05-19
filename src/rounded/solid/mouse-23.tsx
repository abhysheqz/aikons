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
        d="M9.173 1.444C10.09 1.33 11.034 1.25 12 1.25s1.911.081 2.827.194c2.799.345 4.962 2.666 5.18 5.408.132 1.663.243 3.386.243 5.148s-.11 3.485-.243 5.148c-.218 2.742-2.381 5.063-5.18 5.408-.916.113-1.861.194-2.827.194s-1.911-.081-2.827-.194c-2.799-.345-4.962-2.666-5.18-5.408-.132-1.663-.243-3.386-.243-5.148s.11-3.485.243-5.148c.218-2.742 2.381-5.063 5.18-5.408M12 5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_23;
