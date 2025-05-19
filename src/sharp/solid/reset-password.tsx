import React from "react";
const ResetPassword: React.FC<
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
        d="M1.75 12c0-5.66 4.56-10.25 10.184-10.25 3.36 0 6.34 1.639 8.194 4.164l.204-1.37 1.918.29-.758 5.101-1.608-.36h-.004l-.001-.002-3.284-.738.422-1.905 1.723.387a8.22 8.22 0 0 0-6.806-3.615C7.38 3.702 3.69 7.417 3.69 12s3.69 8.298 8.244 8.298c4.553 0 8.243-3.715 8.243-8.298h1.94c0 5.66-4.56 10.25-10.183 10.25C6.309 22.25 1.75 17.66 1.75 12"
      />
      <path fill="currentColor" d="M7.75 10.25h8.5v7h-8.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 9.5a2.75 2.75 0 1 1 5.5 0v2.25h-1.5V9.5a1.25 1.25 0 1 0-2.5 0v2.25h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ResetPassword;
