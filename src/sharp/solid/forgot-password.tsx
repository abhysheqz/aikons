import React from "react";
const ForgotPassword: React.FC<
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
        d="M18.75 13.75a.99.99 0 0 0-1 .978v1h-2v-1c0-1.655 1.354-2.978 3-2.978s3 1.323 3 2.978c0 .594-.176 1.15-.479 1.614a9 9 0 0 1-.577.771l-.103.125c-.154.19-.291.357-.418.53-.316.43-.423.703-.423.916v1h-2v-1c0-.879.436-1.59.812-2.101.16-.218.336-.433.49-.622l.09-.11c.185-.228.335-.419.453-.6a.95.95 0 0 0 .155-.523.99.99 0 0 0-1-.978m-1 7h2.012v2H17.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 8.25h17.5v2.368a4.3 4.3 0 0 0-1-.118c-2.322 0-4.25 1.868-4.25 4.228v2.25h2.377a4.2 4.2 0 0 0-.377 1.706v4.066H2.25zM13 14.49v2.01h-2v-2.01zM9 16.5v-2.01H7v2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 1 1 11 0v2.5h-2v-2.5a3.5 3.5 0 0 0-3.5-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ForgotPassword;
