import React from "react";
const Ethereum: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 12-5.76 2.578c-.611.281-.917.422-1.24.422s-.629-.14-1.24-.422L5 12m14 0c0-.532-.306-1-.917-1.937L14.58 4.696C13.406 2.899 12.82 2 12 2s-1.406.899-2.58 2.696l-3.503 5.368C5.305 11 5 11.468 5 12m14 0c0 .532-.306 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22s-1.406-.899-2.58-2.696l-3.503-5.368C5.305 13 5 12.532 5 12"
      />
    </svg>
  );
};
export default Ethereum;
