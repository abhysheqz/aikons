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
        d="M7.5 3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3h-2V3h-5v3h-2zM12 15.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-5.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 4.75A1.75 1.75 0 0 0 5.25 6.5v4.37c0 .564.174 1.114.497 1.577l2.541 3.63a2.75 2.75 0 0 0 2.253 1.173h2.918a2.75 2.75 0 0 0 2.253-1.173l2.54-3.63a2.75 2.75 0 0 0 .498-1.577V6.5A1.75 1.75 0 0 0 17 4.75zm4 2.75a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Usb;
