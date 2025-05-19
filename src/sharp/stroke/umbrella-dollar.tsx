import React from "react";
const UmbrellaDollar: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 15.5c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M18 15.5V14m0 7.5c-.87 0-1.612-.417-1.886-1m1.886 1V23M12 3.5V1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 3c4.97 0 9 3.477 9 9H3c0-5.523 4.03-9 9-9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3c2.21 0 4 3.477 4 9H8c0-5.523 1.79-9 4-9Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12v8.5a1.5 1.5 0 0 1-3 0V20"
      />
    </svg>
  );
};
export default UmbrellaDollar;
