import React from "react";
const MailOpenLove: React.FC<
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
        d="M14.4 5.748c-1.397-.713-2.4.339-2.4.339s-1.003-1.052-2.4-.339c-1.692.865-1.814 4.25 2.4 5.752 4.214-1.503 4.092-4.887 2.4-5.752"
      />
      <path
        fill="currentColor"
        d="m4.469 6.47 1.062 1.06-2.29 2.296 8.76 4.82 8.76-4.82-2.292-2.296 1.062-1.06 3.219 3.227V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9.697z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 1.25h15.5v10.4h-1.5v-8.9H5.75v8.9h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailOpenLove;
