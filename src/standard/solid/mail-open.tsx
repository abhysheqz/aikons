import React from "react";
const MailOpen: React.FC<
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
        d="M6.75 2.5c-.69 0-1.25.56-1.25 1.25v8H4v-8A2.75 2.75 0 0 1 6.75 1h10a2.75 2.75 0 0 1 2.75 2.75v8H18v-8c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5.75A.75.75 0 0 1 9.25 5h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 4A.75.75 0 0 1 9.25 9h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.016 9.545 5.28 7.28 4.22 6.22 1.513 8.927A1.75 1.75 0 0 0 1 10.164v9.586a2.75 2.75 0 0 0 2.75 2.75h16a2.75 2.75 0 0 0 2.75-2.75v-9.586c0-.464-.184-.909-.513-1.237L19.28 6.22l-1.06 1.06 2.264 2.265-8.175 4.087a1.25 1.25 0 0 1-1.118 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailOpen;
