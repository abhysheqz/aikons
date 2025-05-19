import React from "react";
const Coordinate_01: React.FC<
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
        d="M18.885 13.781a1 1 0 0 1 1.414.024l2.42 2.5a1 1 0 0 1 0 1.39l-2.42 2.5a1 1 0 1 1-1.437-1.39l.779-.805H2a1 1 0 1 1 0-2h17.64l-.778-.805a1 1 0 0 1 .023-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.293 1.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414L8 4.414V22a1 1 0 1 1-2 0V4.414l-.793.793a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coordinate_01;
