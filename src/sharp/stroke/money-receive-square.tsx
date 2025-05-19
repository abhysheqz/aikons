import React from "react";
const MoneyReceiveSquare: React.FC<
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
        d="M12 9c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2 .672 2 1.5-.896 1.5-2 1.5m0-6c.87 0 1.611.417 1.886 1M12 9V7.5m0 7.5c-.871 0-1.612-.417-1.886-1M12 15v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 2.5h-11v19h19v-11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21.5 2.524-4.649 4.637m-.339-4.163V7.5H21"
      />
    </svg>
  );
};
export default MoneyReceiveSquare;
