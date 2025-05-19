import React from "react";
const Sword_02: React.FC<
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
        d="M4.53 19.47a.75.75 0 1 0-1.06 1.06.75.75 0 0 0 1.06-1.06M2.41 18.409A2.25 2.25 0 1 1 5.59 21.59a2.25 2.25 0 0 1-3.182-3.182"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m4.969 17.969 2.5-2.5 1.06 1.06-2.5 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.005 17.055-3.06-3.06L17.098 2.827 22.25 1.75l-1.077 5.152z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.09 13.75H4v-1.5h1.71l6.04 6.04V20h-1.5v-1.09z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sword_02;
