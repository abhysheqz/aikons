import React from "react";
const BitcoinSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.25 5.296h1.494V6.5h1.5v1.046h.904V6.5h1.5v1.086c1.208.217 2.102 1.297 2.102 2.562 0 .718-.288 1.377-.759 1.852.47.475.759 1.134.759 1.852 0 1.265-.894 2.345-2.102 2.562V17.5h-1.5v-1.046h-.904V17.5h-1.5v-1.046H8.25zm6 2.602c0 .629-.49 1.102-1.05 1.102H9.75V9.046h3.45c.56 0 1.05.473 1.05 1.102M13.2 12.75H9.75v2.204h3.45c.56 0 1.05-.473 1.05-1.102s-.49-1.102-1.05-1.102"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSquare;
