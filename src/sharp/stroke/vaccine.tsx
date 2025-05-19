import React from "react";
const Vaccine: React.FC<
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
        d="m13.213 17.73 1.293 1.292 2.317-2.35M19 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2.018 22.016l2.991-3.01m0 0 1.021.99 2.46-1.513a.01.01 0 0 0 .002-.016L5.638 15.69m-.629 3.317-1.021-1.008a.01.01 0 0 1-.001-.013l1.65-2.296m0 0L4.52 14.52a.01.01 0 0 1 0-.015l7.463-7.5m0 0-1.47-1.512m1.47 1.511 1.235 1.235m3.81 3.768-1.272-1.261m0 0 3.912-4.806m-3.912 4.806-2.538-2.507m6.45-2.3c.681.682.83 1.065 2.3 1.065m-2.3-1.064-1.554-1.597m-4.896 3.896 4.896-3.896m0 0c-.596-.68-1.086-.553-1.086-2.32"
      />
    </svg>
  );
};
export default Vaccine;
