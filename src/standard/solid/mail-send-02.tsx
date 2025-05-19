import React from "react";
const MailSend_02: React.FC<
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
        d="M3.75 3A2.75 2.75 0 0 0 1 5.75v12a2.75 2.75 0 0 0 2.75 2.75h13.115a2.5 2.5 0 0 1-.115-.75h-2.5a2.5 2.5 0 0 1 0-5h2.5a2.5 2.5 0 0 1 4.268-1.768l1.482 1.483V5.75A2.75 2.75 0 0 0 19.75 3zm2.378 4.102a.75.75 0 0 0-.756 1.296l4.993 2.912c.856.5 1.915.5 2.77 0l4.993-2.912a.75.75 0 1 0-.756-1.296l-4.992 2.912a1.25 1.25 0 0 1-1.26 0zM14.5 16.25a1 1 0 1 0 0 2h4.293v1.793c0 .265.097.543.344.64a1 1 0 0 0 1.07-.226l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a1 1 0 0 0-1.07-.225c-.247.096-.344.374-.344.64v1.792z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSend_02;
