import React from "react";
const MailAdd_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h9.906a2.5 2.5 0 0 1 1.094-4.748h1v-1a2.5 2.5 0 0 1 5 0v1h1q.204 0 .399.031h.351V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 12.752a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 0 1-2 0v-2.5h-2.5a1 1 0 0 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailAdd_02;
