import React from "react";
const Usb: React.FC<
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
        d="M11 22.75v-5.5h2v5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 1.25h8.5v4H18a.75.75 0 0 1 .75.75v6.208l-3.325 5.542h-6.85L5.25 12.208V6A.75.75 0 0 1 6 5.25h1.75zm6.611 1.778V5.25H9.64V3.028zM10.5 10h3V8h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Usb;
