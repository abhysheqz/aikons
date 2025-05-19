import React from "react";
const Scissor: React.FC<
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
        d="M17.75 4.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M17.75 15.75a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.51 4.327a1 1 0 0 1 1.413-.067l5.5 5a1 1 0 1 1-1.346 1.48l-5.5-5a1 1 0 0 1-.067-1.413m13.477 2.997a1 1 0 0 1-.061 1.413l-3.404 3.12 3.435 3.436a1 1 0 1 1-1.414 1.414l-3.497-3.497-7.12 6.527a1 1 0 1 1-1.352-1.474l12-11a1 1 0 0 1 1.413.061"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Scissor;
