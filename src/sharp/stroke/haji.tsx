import React from "react";
const Haji: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 11.5-5.5 3-1 7.5M15 11.5l5.5 3 1 7.5M7.5 22l1.001-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 18s5.346-1.466 7.5-6M12.5 20s5-2 6-6.5M21 17.5S19 21 17.5 22M16 9.058l.421-2.155C16.916 4.366 15.023 2 12.5 2S8.084 4.366 8.579 6.903l.42 2.155C9.334 10.768 10.8 12 12.5 12c1.702 0 3.167-1.231 3.5-2.942ZM8.501 6H16.5"
      />
    </svg>
  );
};
export default Haji;
