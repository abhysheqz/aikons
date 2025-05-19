import React from "react";
const SmartWatch_04: React.FC<
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
        d="M6.5 3.75A2.75 2.75 0 0 0 3.75 6.5v11a2.75 2.75 0 0 0 2.75 2.75h11a2.75 2.75 0 0 0 2.75-2.75v-11a2.75 2.75 0 0 0-2.75-2.75zm9.207 4.543a1 1 0 0 0-1.414 0L12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12l-.293.293a1 1 0 1 0 1.414 1.414l.293-.293.293.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0 0-1.414M8 22a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartWatch_04;
