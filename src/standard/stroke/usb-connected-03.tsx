import React from "react";
const UsbConnected_03: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11V8.353a.853.853 0 0 0-.853-.853H5.853A.853.853 0 0 0 5 8.353V17c0 2.419 1.718 4.537 4 5M13.5 7.5V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5M9.5 4.5h1"
      />
      <path
        fill="currentColor"
        d="M14.03 17.47a.75.75 0 1 0-1.06 1.06zM14.5 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47A4.75 4.75 0 0 0 15 13.25v1.5A3.25 3.25 0 0 1 18.25 18zM15 13.25A4.75 4.75 0 0 0 10.25 18h1.5A3.25 3.25 0 0 1 15 14.75zM10.25 18A4.75 4.75 0 0 0 15 22.75v-1.5A3.25 3.25 0 0 1 11.75 18zM15 22.75A4.75 4.75 0 0 0 19.75 18h-1.5A3.25 3.25 0 0 1 15 21.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
    </svg>
  );
};
export default UsbConnected_03;
