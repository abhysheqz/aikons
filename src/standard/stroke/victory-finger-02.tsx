import React from "react";
const VictoryFinger_02: React.FC<
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
        d="m7.334 10.5-1.148 1.35c-.935 1.098-1.403 1.648-1.58 2.297-.076.28-.112.57-.105.862.015.672.336 1.32.978 2.616l1.46 2.8A2 2 0 0 0 8.712 21.5h7.46c.906 0 1.699-.609 1.931-1.484.502-1.888 1.307-4.929 1.342-5.14.325-1.957-.82-3.859-2.692-4.468-.294-.096-.672-.156-1.427-.276M14.5 12.5l1.88-7.877c.223-1.096-.606-2.123-1.715-2.123-.782 0-1.47.523-1.684 1.282L11.362 9.5 9.748 3.8A1.78 1.78 0 0 0 8.04 2.5c-1.108 0-1.945 1.013-1.747 2.113L8.5 13.5"
      />
    </svg>
  );
};
export default VictoryFinger_02;
