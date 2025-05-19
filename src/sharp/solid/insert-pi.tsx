import React from "react";
const InsertPi: React.FC<
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
        d="M19.25 3.034c.581-.403.75-.81.75-1.034h2c0 1.126-.731 2.069-1.61 2.678-.906.628-2.118 1.022-3.433 1.022H7.685c-1.086 0-2.036.373-2.702.906C4.305 7.149 4 7.786 4 8.3H2c0-1.286.726-2.449 1.734-3.256C4.755 4.227 6.147 3.7 7.684 3.7h9.273c.928 0 1.738-.28 2.293-.666"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.004 10.41.5-5.5 1.992.18-.5 5.5zM8.702 10.677c.133-2.012.232-4.19.299-5.72l1.998.087a269 269 0 0 1-.301 5.764c-.132 2-.302 3.946-.523 4.915-.21.922-.55 1.963-1.18 2.79C8.33 19.384 7.35 20 6 20v-2c.65 0 1.07-.26 1.405-.7.37-.486.63-1.195.82-2.023.179-.781.342-2.553.477-4.6M17 12.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 4v-1.333h-1.5V16.5h-1.334V18h1.333v1.334h1.5V18h1.334v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InsertPi;
