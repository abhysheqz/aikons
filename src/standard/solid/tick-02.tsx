import React from "react";
const Tick_02: React.FC<
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
        d="M20.176 5.263a1 1 0 0 1 .061 1.413l-11 12a1 1 0 0 1-1.444.03l-4.5-4.5a1 1 0 1 1 1.414-1.413l3.762 3.761 10.294-11.23a1 1 0 0 1 1.413-.061"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tick_02;
