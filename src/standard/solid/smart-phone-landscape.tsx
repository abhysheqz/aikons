import React from "react";
const SmartPhoneLandscape: React.FC<
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
        d="M1.25 16.5A2.75 2.75 0 0 0 4 19.25h16a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 20 4.75H4A2.75 2.75 0 0 0 1.25 7.5zm17.25-4.49a1 1 0 1 0 2 0V12a1 1 0 0 0-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhoneLandscape;
