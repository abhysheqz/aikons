import React from "react";
const MailRemove_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h9.834q.16-.28.398-.518l1.232-1.232-1.231-1.232a2.5 2.5 0 1 1 3.537-3.534l1.23 1.23 1.232-1.232a2.5 2.5 0 0 1 2.518-.617V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zm16.201 11.604-.024.064-.02-.02zm.128-2.249a1 1 0 0 0-1.414-1.414l-2.293 2.293-2.291-2.292a1 1 0 1 0-1.415 1.414l2.291 2.292-2.292 2.293a1 1 0 0 0 1.414 1.414l2.292-2.292 2.294 2.292a1 1 0 1 0 1.414-1.414l-2.293-2.292z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_02;
