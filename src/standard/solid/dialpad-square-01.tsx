import React from "react";
const DialpadSquare_01: React.FC<
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
        d="M9 3.25C9 2.56 9.56 2 10.25 2h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3C9.56 7.5 9 6.94 9 6.25zM9 10.25C9 9.56 9.56 9 10.25 9h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM9 17.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM16 3.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM16 10.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM16 17.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM2 3.25C2 2.56 2.56 2 3.25 2h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3C2.56 7.5 2 6.94 2 6.25zM2 10.25C2 9.56 2.56 9 3.25 9h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25zM2 17.25c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DialpadSquare_01;
