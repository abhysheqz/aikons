import React from "react";
const Pen_02: React.FC<
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
        d="M20.15 2.763a1.75 1.75 0 0 0-2.474 0L16 4.438l-1.062 1.06 3.97 3.97a.75.75 0 0 1 0 1.06l-1.94 1.94a.75.75 0 0 0 1.061 1.06l1.94-1.939a2.25 2.25 0 0 0 0-3.182L19.56 8l1.675-1.676a1.75 1.75 0 0 0 0-2.475zm-2.534 7.181-3.56-3.56L8.5 11.938l3.56 3.56zm-13.78 6.66L7.44 13 11 16.56l-3.602 3.604c-.33.33-.74.571-1.19.7l-3 .857a.75.75 0 0 1-.928-.927l.857-3.002c.129-.45.37-.858.7-1.189"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pen_02;
