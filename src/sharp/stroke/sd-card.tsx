import React from "react";
const SdCard: React.FC<
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
        d="M5.5 2v-.75h-.75V2zm0 8 .624.416.126-.189V10zm15-8h.75a.75.75 0 0 0-.75-.75zm0 20v.75a.75.75 0 0 0 .75-.75zm-17 0h-.75c0 .414.336.75.75.75zm0-9-.624-.416-.126.189V13zM4.75 2v8h1.5V2zm.75.75h15v-1.5h-15zM19.75 2v20h1.5V2zm.75 19.25h-17v1.5h17zM4.25 22v-9h-1.5v9zm.626-12.416-2 3 1.248.832 2-3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 5v4M13 5v4M9.5 5v4"
      />
    </svg>
  );
};
export default SdCard;
