import React from "react";
const LeftToRightListBullet: React.FC<
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
        d="M20.5 6h-12V4h12zM3.5 4h2.009v2H3.5zM3.5 11h2.009v2H3.5zM3.5 18h2.009v2H3.5zM20.5 13h-12v-2h12zM20.5 20h-12v-2h12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListBullet;
