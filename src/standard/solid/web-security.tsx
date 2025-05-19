import React from "react";
const WebSecurity: React.FC<
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
        d="M12 13.75c-.69 0-1.25.56-1.25 1.25v.75h2.5V15c0-.69-.56-1.25-1.25-1.25m2.75 2V15a2.75 2.75 0 1 0-5.5 0v.75H8.5a.75.75 0 0 0-.75.75V22c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 9v9.5a1 1 0 0 1-1 1H19a1 1 0 1 0 0 2h.5a3 3 0 0 0 3-3V4.003a3 3 0 0 0-3.002-3l-15 .008a3 3 0 0 0-2.998 3V18.5a3 3 0 0 0 3 3H5a1 1 0 1 0 0-2h-.5a1 1 0 0 1-1-1V9zm-14-5a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2zm3.991 0a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebSecurity;
