import React from "react";
const MailSearch_02: React.FC<
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
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16a2.75 2.75 0 0 1 2.75 2.75v8.519A6.027 6.027 0 1 0 12.184 19.5H3.75A2.75 2.75 0 0 1 1 16.75zm4.102 1.622a.75.75 0 0 1 1.026-.27l4.992 2.912c.39.227.87.227 1.26 0l4.992-2.912a.75.75 0 0 1 .756 1.296l-4.992 2.912c-.856.5-1.915.5-2.771 0L5.371 7.398a.75.75 0 0 1-.27-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 16.276a4.527 4.527 0 1 1 8.354 2.418l1.352 1.348a1 1 0 0 1-1.412 1.416l-1.355-1.35a4.527 4.527 0 0 1-6.939-3.83m4.526-2.526a2.527 2.527 0 1 0 0 5.053 2.527 2.527 0 0 0 0-5.053"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailSearch_02;
