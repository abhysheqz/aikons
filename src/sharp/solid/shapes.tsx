import React from "react";
const Shapes: React.FC<
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
        d="M16.75 1.25V2c0 2.9 2.35 5.25 5.25 5.25h.75v9.5H22A5.25 5.25 0 0 0 16.75 22v.75h-9.5V22c0-2.9-2.35-5.25-5.25-5.25h-.75v-9.5H2C4.9 7.25 7.25 4.9 7.25 2v-.75z"
      />
    </svg>
  );
};
export default Shapes;
