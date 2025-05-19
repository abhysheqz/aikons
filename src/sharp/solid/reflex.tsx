import React from "react";
const Reflex: React.FC<
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
        d="m19.392 6.982 3 2.508a1 1 0 0 1-.002 1.536l-3 2.493-1.279-1.538.871-.724H9.868L5.785 19.42l1.614-.606.703 1.873-4 1.5a1 1 0 0 1-1.313-.662l-1-3.5 1.923-.549.294 1.029 4.35-8.694a1 1 0 0 1 .894-.553h9.745l-.886-.74z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.339 10.4-3.663 6.277C3.05 15.42 1.25 12.648 1.25 9.549 1.25 5.247 4.715 1.75 9 1.75s7.75 3.497 7.75 7.799q0 .535-.07 1.05z"
      />
    </svg>
  );
};
export default Reflex;
