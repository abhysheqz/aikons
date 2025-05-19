import React from "react";
const MailEdit_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h7.75v-1.25c0-.597.237-1.169.659-1.591l5.5-5.5a2.25 2.25 0 0 1 3.182 0l1.659 1.659V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zM19.78 12.22a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 0 0-.22.53v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .53-.22l5.5-5.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailEdit_02;
