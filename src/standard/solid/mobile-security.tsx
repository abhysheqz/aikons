import React from "react";
const MobileSecurity: React.FC<
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
        d="M16 2.75c-.69 0-1.25.56-1.25 1.25v.75h2.5V4c0-.69-.56-1.25-1.25-1.25m2.75 2V4a2.75 2.75 0 1 0-5.5 0v.75h-.75a.75.75 0 0 0-.75.75V11c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 1h6.49a4.24 4.24 0 0 0-1.192 2.362A2.25 2.25 0 0 0 10.25 5.5V11a2.25 2.25 0 0 0 2.25 2.25h7V20a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3m4 17a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileSecurity;
