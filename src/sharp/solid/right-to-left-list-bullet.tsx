import React from "react";
const RightToLeftListBullet: React.FC<
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
        d="M15.5 6h-12V4h12zM18.5 4h2v2h-2zM18.5 11h2v2h-2zM18.5 18h2v2h-2zM15.5 13h-12v-2h12zM15.5 20h-12v-2h12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListBullet;
