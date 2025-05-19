import React from "react";
const Soundcloud: React.FC<
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
        d="M8 5.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25M5 9.13a.75.75 0 0 1 .75.75v9.028a.75.75 0 0 1-1.5 0V9.879A.75.75 0 0 1 5 9.13m-3 1.75a.75.75 0 0 1 .75.75v5.527a.75.75 0 0 1-1.5 0V11.63a.75.75 0 0 1 .75-.75M18.331 10.024c-.02-1.609-.809-3.04-1.98-4.06a7.1 7.1 0 0 0-5.438-1.667.75.75 0 0 0-.663.745V19c0 .414.336.75.75.75h6.788c1.248 0 2.64-.54 3.632-1.547 1.018-1.032 1.604-2.548 1.202-4.405-.358-1.651-1.347-2.7-2.414-3.26a4.5 4.5 0 0 0-1.877-.514"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Soundcloud;
