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
        d="M2 19V5h2v14zM12 19V5h2v14zM16 12a3 3 0 1 1 6 0v.214c0 .905-.382 1.768-1.05 2.377L18.442 17H22v2h-6v-2.426l3.586-3.447.012-.01c.256-.23.402-.559.402-.903V12a1 1 0 1 0-2 0v.4h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13H3v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_02;
