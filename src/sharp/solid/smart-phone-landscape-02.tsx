import React from "react";
const SmartPhoneLandscape_02: React.FC<
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
        d="M1.25 4.75v14.5h21.5V4.75zM19 6.683v10.634H3.203V14.53l.977-.484V9.953l-.977-.484V6.683z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhoneLandscape_02;
