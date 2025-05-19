import React from "react";
const MailBlock_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h8.936a6 6 0 0 1-.436-2.25c0-1.678.692-3.2 1.8-4.286a6 6 0 0 1 4.2-1.714c1.66 0 3.164.675 4.25 1.765V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zm14.464 12.025-3.22-3.219a2.5 2.5 0 0 1 3.22 3.22M15.937 16.3l3.263 3.264a2.5 2.5 0 0 1-3.263-3.263m2.313-3.55a4.5 4.5 0 0 0-3.15 1.286 4.5 4.5 0 1 0 3.15-1.286"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailBlock_02;
