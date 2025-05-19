import React from "react";
const MedalThirdPlace: React.FC<
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
        strokeWidth={1.5}
        d="M12 15.5h.5m0 0a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.5m2 1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-.5"
      />
      <circle
        cx={12}
        cy={15.5}
        r={6.5}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 9.5 5.5 2M15 9.5 18.5 2M15 2l-1 2.5M9.5 2l3 6.5"
      />
    </svg>
  );
};
export default MedalThirdPlace;
