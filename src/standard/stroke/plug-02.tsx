import React from "react";
const Plug_02: React.FC<
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
        strokeWidth={1.5}
        d="M12 17v4c0 .552-.449 1.005-.999.95C5.947 21.45 2 17.187 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.43-2.88 8.186-6.869 9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 11H8.5v2.697a1 1 0 0 0 .168.555l1.535 2.303a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l1.535-2.303a1 1 0 0 0 .168-.555V11H14m-4 0V9m0 2h4m0 0V9"
      />
    </svg>
  );
};
export default Plug_02;
