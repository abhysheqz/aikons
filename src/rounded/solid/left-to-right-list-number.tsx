import React from "react";
const LeftToRightListNumber: React.FC<
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
        d="M10 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.794 16.002A10 10 0 0 0 4.5 16H3a1 1 0 1 1 0-2h1.56c.215 0 .452-.001.67.042a2.2 2.2 0 0 1 1.728 1.729c.043.217.043.454.042.67v.118c0 .216 0 .453-.042.67a2.2 2.2 0 0 1-1.729 1.729C5.012 19 4.775 19 4.56 19H4.5a10 10 0 0 0-.345.005.2.2 0 0 0-.15.15l-.003.051A10 10 0 0 0 4 19.5v.5h2a1 1 0 1 1 0 2H3.573c-.115 0-.284 0-.435-.02a1.3 1.3 0 0 1-.757-.36 1.3 1.3 0 0 1-.361-.758c-.02-.15-.02-.32-.02-.435v-.987c0-.215 0-.452.042-.67a2.2 2.2 0 0 1 1.729-1.728C3.988 17 4.225 17 4.44 17h.06a10 10 0 0 0 .344-.005.2.2 0 0 0 .15-.15l.003-.051C5 16.73 5 16.646 5 16.5a10 10 0 0 0-.005-.345.2.2 0 0 0-.15-.15z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h1.2a1.3 1.3 0 0 1 1.3 1.3V8H6a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h.5V4H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListNumber;
