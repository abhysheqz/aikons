import React from "react";
const StarSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.64 4.94a.685.685 0 0 0-1.28 0l-1.057 2.772-2.901.142a.685.685 0 0 0-.419 1.199l2.219 1.947-.82 3.142a.685.685 0 0 0 1.05.738L12 15.367l2.569 1.763a.685.685 0 0 0 1.05-.738l-.82-3.142 2.218-1.947a.685.685 0 0 0-.418-1.199l-2.901-.142z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarSquare;
