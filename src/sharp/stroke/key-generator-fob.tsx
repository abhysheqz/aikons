import React from "react";
const KeyGeneratorFob: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 22a7 7 0 0 0 7-7c0-3.866-2-13-2-13H7s-2 9.134-2 13a7 7 0 0 0 7 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 5v1"
      />
    </svg>
  );
};
export default KeyGeneratorFob;
