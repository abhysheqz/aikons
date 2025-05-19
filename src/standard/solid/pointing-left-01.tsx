import React from "react";
const PointingLeft_01: React.FC<
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
        d="M5.207 1.293a1 1 0 0 1 0 1.414l-.793.793H8a1 1 0 0 1 0 2H4.414l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0M14.552 5.787v.001l5.704 4.462H22a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-1.845L18 21.681c-.777.371-1.937.818-3.107.993-1.14.17-2.518.115-3.46-.82-2.047-2.035-2.622-4.74-2.685-6.604H3.75a2.5 2.5 0 0 1 0-5h8.374l-.97-.923-.045-.047a2.4 2.4 0 0 1 .337-3.503c.91-.707 2.2-.702 3.106.01"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_01;
