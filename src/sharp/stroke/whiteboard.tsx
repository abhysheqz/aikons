import React from "react";
const Whiteboard: React.FC<
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
        strokeWidth={1.5}
        d="M14 4H2v16h19v-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12.017 4.5 9.6c.828-.801 2.172-.801 3 0 .828.8.828 2.098 0 2.899a2 2 0 0 0 0 2.9c.828.8 2.172.8 3 0l.5-.484"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 10.5 19.5 4 22 6.5 15.5 13H13z"
      />
    </svg>
  );
};
export default Whiteboard;
