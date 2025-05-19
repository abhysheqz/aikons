import React from "react";
const BasketballHoop: React.FC<
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
        d="M1 2.5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-3v-2h2v-13H3v13h2v2H2a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.293 7.664A1 1 0 0 1 8 7.37h8a1 1 0 0 1 1 1v3h-2v-2H9v2H7v-3a1 1 0 0 1 .293-.707M5 14.371h1.455L7.508 22.5l1.984-.258-.113-.871H11v1h2v-1h1.621l-.113.872 1.984.257 1.053-8.129H19v-2H5zm9.88 5 .195-1.5H13v1.5zm-3.88 0v-1.5H8.925l.194 1.5zm-2.334-3.5H11v-1.5H8.471zm4.334 0h2.334l.195-1.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BasketballHoop;
