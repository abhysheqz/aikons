import React from "react";
const Chocolate: React.FC<
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
        d="M17.5 16.192 7.808 6.5 3.5 9.73l4.308 2.154.538 3.77 3.77.538L14.27 20.5zM14.47 1.47a.75.75 0 0 1 1.061 0L18.5 4.437 16.127 6.81 12.63 3.311zM11.569 4.372l-2.06 2.06 3.498 3.498 2.06-2.06zM14.067 10.99l3.502 3.502 2.06-2.06-3.502-3.502zM20.69 11.372l1.841-1.842a.75.75 0 0 0 0-1.06L19.56 5.498 17.188 7.87z"
      />
      <path
        fill="currentColor"
        d="M4.373 11.565 1.47 14.47a.75.75 0 0 0 0 1.06l7 7a.75.75 0 0 0 1.06 0l2.905-2.905-1.144-2.288-4.049-.578-.578-4.05z"
      />
    </svg>
  );
};
export default Chocolate;
