import React from "react";
const Pokeball: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m8.5 1a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-7-.918a9.25 9.25 0 0 0 18.5.007c-1.99.728-3.806 1.25-5.556 1.558a3.751 3.751 0 0 1-7.39-.008c-1.747-.31-3.563-.832-5.554-1.556"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pokeball;
