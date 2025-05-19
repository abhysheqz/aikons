import React from "react";
const Asterisk_02: React.FC<
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
        d="M13 3v7.277l6.372-3.641.992 1.736L14.015 12l6.35 3.628-.993 1.736L13 13.724V21h-2v-7.277l-6.372 3.641-.992-1.736L9.984 12 3.636 8.372l.992-1.736L11 10.276V3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Asterisk_02;
