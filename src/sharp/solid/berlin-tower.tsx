import React from "react";
const BerlinTower: React.FC<
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
        d="M7.25 8.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.558 17.028c.5-1.751.836-3.59.836-4.435h2c0 1.155-.414 3.236-.913 4.985-.506 1.772-1.151 3.59-1.692 4.672L7 21.356c.46-.919 1.064-2.6 1.558-4.328M15.442 17.028c-.5-1.752-.836-3.59-.836-4.436h-2c0 1.155.414 3.237.913 4.986.506 1.772 1.151 3.59 1.692 4.672L17 21.355c-.46-.918-1.064-2.6-1.558-4.327M13 1.75v3h-2v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 16.75H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BerlinTower;
