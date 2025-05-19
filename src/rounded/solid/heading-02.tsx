import React from "react";
const Heading_02: React.FC<
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
        d="M3 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M13 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M16 13a3 3 0 0 1 6 0v.214c0 .911-.386 1.78-1.063 2.389l-2.605 2.344-.059.053H21a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-.4c-.001-.34-.003-.771.174-1.168.177-.398.499-.685.752-.91l.068-.061 2.605-2.345c.256-.23.401-.558.401-.902V13a1 1 0 1 0-2 0v.4a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_02;
