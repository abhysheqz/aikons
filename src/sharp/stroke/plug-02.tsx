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
        strokeWidth={1.5}
        d="M12 18v4C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 4.43-2.88 8.186-6.869 9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.869 10.76V8.726m4.242 2.043V8.726m1.952 2.216-8.146-.016-.008 4.073 2.54 3.06 3.054.005 2.552-3.05z"
      />
    </svg>
  );
};
export default Plug_02;
