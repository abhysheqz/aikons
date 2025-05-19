import React from "react";
const MouseScroll_01: React.FC<
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
        d="M12 1.25c-.966 0-1.911.081-2.827.194-2.799.345-4.962 2.666-5.18 5.408C3.861 8.515 3.75 10.238 3.75 12s.11 3.485.243 5.148c.218 2.742 2.381 5.063 5.18 5.408.916.113 1.861.194 2.827.194s1.911-.081 2.827-.194c2.799-.345 4.962-2.666 5.18-5.408.132-1.663.243-3.386.243-5.148s-.11-3.485-.243-5.148c-.218-2.742-2.381-5.063-5.18-5.408A23 23 0 0 0 12 1.25m2.968 6.164L12 5.039 9.03 7.414l.937 1.171L11.25 7.56v3.88l-1.282-1.026-.937 1.171L12 13.96l2.968-2.375-.937-1.171-1.281 1.025V7.56l1.281 1.025z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseScroll_01;
