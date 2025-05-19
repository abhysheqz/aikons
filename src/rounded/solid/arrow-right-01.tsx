import React from "react";
const ArrowRight_01: React.FC<
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
        d="M8.195 5.407a1 1 0 0 1 1.398-.212 53.23 53.23 0 0 1 3.063 2.457c.762.662 1.55 1.396 2.156 2.081.302.342.58.695.787 1.04.19.316.401.751.401 1.227s-.21.912-.401 1.228a7.4 7.4 0 0 1-.787 1.039c-.606.685-1.394 1.42-2.156 2.081a53 53 0 0 1-3.063 2.457A1 1 0 0 1 8 18V6c0-.206.063-.414.195-.593"
      />
    </svg>
  );
};
export default ArrowRight_01;
