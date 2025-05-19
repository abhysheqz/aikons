import React from "react";
const CheckmarkSquare_04: React.FC<
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
        d="m21.276 3.66-8.783 9.759a1 1 0 0 1-1.45.038l-3-3a1 1 0 1 1 1.414-1.414l2.255 2.255 8.155-9.062A2.7 2.7 0 0 0 18.75 2h-14A2.75 2.75 0 0 0 2 4.75v14a2.75 2.75 0 0 0 2.75 2.75h14a2.75 2.75 0 0 0 2.75-2.75v-14c0-.387-.08-.755-.224-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkSquare_04;
