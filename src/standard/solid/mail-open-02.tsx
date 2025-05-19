import React from "react";
const MailOpen_02: React.FC<
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
        d="M13.249 2.444a2.75 2.75 0 0 0-2.998 0L1.833 7.916l.425.397 4.924 4.477c.23.21.53.325.841.325h7.454c.31 0 .61-.116.84-.325l4.928-4.48.428-.39z"
      />
      <path
        fill="currentColor"
        d="m22.489 9.207-.234.212-4.929 4.48a2.75 2.75 0 0 1-1.85.716H8.023a2.75 2.75 0 0 1-1.85-.715L1.238 9.413l-.226-.21A2 2 0 0 0 1 9.406v9.958a2.75 2.75 0 0 0 2.75 2.75h16a2.75 2.75 0 0 0 2.75-2.75V9.407a2 2 0 0 0-.012-.2"
      />
    </svg>
  );
};
export default MailOpen_02;
