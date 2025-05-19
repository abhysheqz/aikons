import React from "react";
const Printer3d: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2H2v.5a2 2 0 0 0 2 2h4zM22 2h-6v2.5h4a2 2 0 0 0 2-2zM16 2H8v8h8zM13.5 13h-3L8 10h8zM13.5 13h-3v1.757a3 3 0 0 0 .879 2.122L12 17.5l.621-.621a3 3 0 0 0 .879-2.122zM2 22h8a2 2 0 0 0 2-2M14 5v.01M14 7.5v.01"
      />
    </svg>
  );
};
export default Printer3d;
