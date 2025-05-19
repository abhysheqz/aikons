import React from "react";
const QrCode: React.FC<
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
        d="M17.75 15.75v-2h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h2v-4zm-4-1h2v1.5h3v2.5h-2v-.5h-3zm0 5h2v2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13h8.75v-2H12a1 1 0 0 0-1 1v3h2zm-2 7v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 9V2.25H9V9zM15 9V2.25h6.75V9zM2.25 21.75V15H9v6.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 13H2.25v-2H9zM11 9V2.25h2V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QrCode;
