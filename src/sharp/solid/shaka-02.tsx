import React from "react";
const Shaka_02: React.FC<
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
        d="M2.75 4.75c0-1.36 1.076-2.5 2.45-2.5 1.373 0 2.449 1.14 2.449 2.5v4.342l3.06-.59.039-.005c.646-.1 1.166-.18 1.592-.218.435-.04.828-.04 1.21.05a3.69 3.69 0 0 1 2.588 2.29c.14.368.197.76.225 1.206l.002.034.85-.75a2.406 2.406 0 0 1 3.507.336 2.53 2.53 0 0 1-.004 3.098l-3.916 5.285a4.75 4.75 0 0 1-3.816 1.922H7.5A4.75 4.75 0 0 1 2.75 17z"
      />
    </svg>
  );
};
export default Shaka_02;
