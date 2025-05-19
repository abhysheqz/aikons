import React from "react";
const MailLock_02: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h8.75v-4.25a2.25 2.25 0 0 1 1.548-2.138 4.251 4.251 0 0 1 8.404 0l.048.016V4.75A2.75 2.75 0 0 0 19.75 2zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296L12.38 9.014a1.25 1.25 0 0 1-1.26 0zM17 13.75a1.25 1.25 0 1 1 2.5 0v.75H17zm4 0v.75h.75a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75h.75v-.75a2.75 2.75 0 1 1 5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailLock_02;
