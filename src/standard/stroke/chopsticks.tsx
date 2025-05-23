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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.455 9.769 1.702 1.702m-4.426-3.426L12.03 6.343m8.523.714.657.657a.97.97 0 0 1-.023 1.407L8.306 20.755a.97.97 0 0 1-1.339-.046l-.033-.033a.97.97 0 0 1-.012-1.374L19.179 7.045a.97.97 0 0 1 1.373.012m-4.109-3.11-.657-.657a.97.97 0 0 0-1.407.023L2.745 16.194a.97.97 0 0 0 .045 1.34l.034.034a.97.97 0 0 0 1.374.011L16.455 5.321a.97.97 0 0 0-.012-1.373"
      />
    </svg>
  );
};
export default Chopsticks;
