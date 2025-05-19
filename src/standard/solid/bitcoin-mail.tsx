import React from "react";
const BitcoinMail: React.FC<
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
        d="M5.75 4c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v7.708l-5.633 3.1a1.25 1.25 0 0 1-1.204 0L5.75 11.703zm-1.5 6.88V9.31l-1.013 1.013zm18.474-.264a1.75 1.75 0 0 0-.487-.94L19.75 7.19V4A2.75 2.75 0 0 0 17 1.25H7A2.75 2.75 0 0 0 4.25 4v3.19L1.763 9.676a1.75 1.75 0 0 0-.487.937 1 1 0 0 0-.026.224V20A2.75 2.75 0 0 0 4 22.75h16a2.75 2.75 0 0 0 2.75-2.732v-9.179a1 1 0 0 0-.026-.223m-1.96-.291-1.014.557V9.311zM12.75 5a.75.75 0 0 0-1.5-.002v.251H10a.75.75 0 0 0 0 1.5h.25v3.5H10a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-.25a2 2 0 0 0 1.561-3.25 2 2 0 0 0-1.561-3.25zm-1 2.749v-1h1a.5.5 0 0 1 0 1zm0 1.5h1a.5.5 0 0 1 0 1h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMail;
