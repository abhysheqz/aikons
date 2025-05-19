import React from "react";
const Sword_01: React.FC<
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
        d="M9.657 17.02 20.72 8.356 22 2l-6.356 1.28L6.98 14.345 5.31 12.672H3.604v1.495H4.69l2.042 2.043-3.362 3.362a3.1 3.1 0 0 0-1.152-.414L2 20.638c.332.048.65.2.906.456s.408.574.457.906l1.479-.218a3.1 3.1 0 0 0-.415-1.154l3.362-3.361 2.044 2.043v1.086h1.495V18.69z"
      />
    </svg>
  );
};
export default Sword_01;
