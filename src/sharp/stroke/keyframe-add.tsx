import React from "react";
const KeyframeAdd: React.FC<
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
        strokeWidth={1.5}
        d="M16 14 9 6l-7 8 7 8zM18.5 9V2M15 5.5h7"
      />
    </svg>
  );
};
export default KeyframeAdd;
