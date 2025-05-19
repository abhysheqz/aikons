import React from "react";
const Redo_02: React.FC<
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a1 1 0 1 0 0-2 8 8 0 1 1 6.644-12.457c-.513-.037-1.184-.147-2.137-.306l-1.342-.223a1 1 0 1 0-.33 1.972l1.343.224.072.012c1.02.17 1.889.315 2.59.332.744.018 1.48-.1 2.1-.626.62-.525.857-1.231.962-1.969C22 6.266 22 5.385 22 4.35V3a1 1 0 0 0-2 0v1.278c0 .7 0 1.25-.02 1.695A9.99 9.99 0 0 0 12 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo_02;
