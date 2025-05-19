import React from "react";
const MedalSecondPlace: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13.432 18H10.5v-.5l2.275-1.517c.453-.302.725-.81.725-1.354V14.5a1.5 1.5 0 0 0-3 0"
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
export default MedalSecondPlace;
