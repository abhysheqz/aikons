import React from "react";
const MailReceive_02: React.FC<
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
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h16a2.75 2.75 0 0 1 2.75 2.75v9h-3.25a2.5 2.5 0 0 0-4.268-1.768l-2.5 2.5a2.49 2.49 0 0 0-.542 2.725c.122.295.303.571.542.81l1.483 1.483H3.75A2.75 2.75 0 0 1 1 17.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.228.87.228 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 8.398a.75.75 0 0 1-.27-1.026M22 16.25a1 1 0 1 1 0 2h-4.293v1.793c0 .265-.097.543-.344.64a1 1 0 0 1-1.07-.226l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.07-.225c.247.096.344.374.344.64v1.792z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailReceive_02;
