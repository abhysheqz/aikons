import React from "react";
const Wrench_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.503 17.497-.007.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.531 21.496a.01.01 0 0 1-.014 0L2.5 17.529a.01.01 0 0 1 0-.014l7.241-7.268c-.969-3.39.964-6.31 3.558-7.321 1.562-.61 3.366-.55 4.694.094-.456.46-1.105 1.075-1.687 1.661-.614.62-1.233 1.21-1.552 1.61-1.361 2.193 1.16 4.143 2.884 2.985.285-.191.719-.699 1.227-1.185.732-.7 1.37-1.37 2.082-2.076.713 1.657.703 3.315.11 4.736-.576 1.375-1.702 2.528-2.997 3.183-1.321.458-2.631.855-4.306.325z"
      />
    </svg>
  );
};
export default Wrench_01;
