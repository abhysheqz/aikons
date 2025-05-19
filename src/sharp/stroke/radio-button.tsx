import React from "react";
const RadioButton: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={9}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={12}
        r={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default RadioButton;
