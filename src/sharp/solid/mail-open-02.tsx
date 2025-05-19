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
        d="M12.386 1.857a.75.75 0 0 0-.772 0L2.116 7.556l5.695 5.694h8.378l5.695-5.694z"
      />
      <path
        fill="currentColor"
        d="m22.75 8.81-5.94 5.94H7.19L1.25 8.81V21.5c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default MailOpen_02;
