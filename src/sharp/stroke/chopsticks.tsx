import React from "react";
const Chopsticks: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m16.455 9.769 1.702 1.702m-4.426-3.426L12.03 6.342M21.5 8.5 8.306 20.754a.973.973 0 0 1-1.339-.045l-.033-.034a.97.97 0 0 1-.012-1.373L19.5 6.5zM17 5l-2-2L2.745 16.194a.97.97 0 0 0 .045 1.338l.034.034a.97.97 0 0 0 1.374.012z"
      />
    </svg>
  );
};
export default Chopsticks;
