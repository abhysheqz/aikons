import React from "react";
const SwipeLeft_03: React.FC<
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
        d="M7.255 4.75a2.5 2.5 0 1 1 5 0v5.5H16A3.75 3.75 0 0 1 19.75 14v5A3.75 3.75 0 0 1 16 22.75H9.07a2.75 2.75 0 0 1-2.288-1.224l-3.999-5.995a2.49 2.49 0 0 1 3.576-3.43l.896.768zM18.207 1.293a1 1 0 0 1 0 1.414l-.793.793H21a1 1 0 1 1 0 2h-3.586l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeLeft_03;
