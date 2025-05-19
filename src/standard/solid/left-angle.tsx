import React from "react";
const LeftAngle: React.FC<
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
        d="M17.793 2.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-.793-.793V17.5a2 2 0 0 1-2 2H5.414l.793.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414l-.793.793H11V14a3 3 0 0 1 3-3h3.5V5.414l-.793.793a1 1 0 1 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftAngle;
