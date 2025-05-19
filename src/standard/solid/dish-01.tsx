import React from "react";
const Dish_01: React.FC<
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
        d="M1 17a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2h-.242l-.51 1.812A3 3 0 0 1 18.36 22H5.64a3 3 0 0 1-2.888-2.188L2.242 18H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.5 4.691c0-.796-.27-1.483-.76-1.974A2.45 2.45 0 0 0 12 2c-.623 0-1.258.235-1.74.717-.49.49-.76 1.178-.76 1.974 0 .581.19 1.096.433 1.519-4.093.844-7.26 4.14-7.432 8.248a1 1 0 1 0 1.998.084C4.65 10.98 7.874 8 12 8s7.352 2.98 7.5 6.542a1 1 0 1 0 2-.084c-.173-4.107-3.34-7.404-7.433-8.248.242-.423.433-.938.433-1.519"
      />
    </svg>
  );
};
export default Dish_01;
