import React from "react";
const Doughnut: React.FC<
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
        d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22c5.523 0 10-4.477 10-10 0-1.5-.33-2.923-.922-4.2A3 3 0 0 1 17 5a3 3 0 0 1-2.993-2.799A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22 11.722-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24l-.627.761M8 11.722l-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24L2 12.358"
      />
    </svg>
  );
};
export default Doughnut;
