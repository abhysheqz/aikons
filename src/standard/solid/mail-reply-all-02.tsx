import React from "react";
const MailReplyAll_02: React.FC<
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
        d="M1.25 5A2.75 2.75 0 0 1 4 2.25h16A2.75 2.75 0 0 1 22.75 5v10.615a2.5 2.5 0 0 0-.497-.102 5.5 5.5 0 0 0-3.8-1.995 2.5 2.5 0 0 0-4.221-1.286l-.247.248a2.5 2.5 0 0 0-3.753-.247l-2 2a2.5 2.5 0 0 0 0 3.535l1.983 1.982H4A2.75 2.75 0 0 1 1.25 17zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.621 7.648a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.707 13.293a1 1 0 0 1 0 1.414L11.414 16l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 15a4 4 0 0 1 4 4v2a1 1 0 1 1-2 0v-2a2 2 0 0 0-2-2h-1.293v1.293c0 .265-.097.543-.344.64a1 1 0 0 1-1.07-.226l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.07-.225c.247.096.344.374.344.64V15z"
      />
    </svg>
  );
};
export default MailReplyAll_02;
