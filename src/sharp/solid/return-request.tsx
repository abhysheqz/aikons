import React from "react";
const ReturnRequest: React.FC<
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
        d="M4.83 2.665a.75.75 0 0 1 .67-.415h13a.75.75 0 0 1 .67.415l2.5 5-1.34.67-2.293-4.585H5.964L3.67 8.335l-1.342-.67z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 7.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm6.81 5.5 1.25-1.25L10 10.44 6.94 13.5 10 16.56l1.06-1.06-1.25-1.25H14a1.25 1.25 0 0 1 0 2.5h-1.75v1.5H14a2.75 2.75 0 1 0 0-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ReturnRequest;
