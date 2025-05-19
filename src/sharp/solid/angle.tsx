import React from "react";
const Angle: React.FC<
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
        d="M23 17.445 12 1 1 17.445l1.664 1.11 5.648-8.22c.806.663 1.711 1.127 2.688 1.318V23h2V11.653c.976-.191 1.881-.655 2.688-1.319l5.648 8.22z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.594 12.195C8.15 13.34 10.008 14 12 14v2c-2.447 0-4.716-.813-6.593-2.194z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Angle;
