import React from "react";
const Polygon: React.FC<
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
        d="M6.384 2.055a2.75 2.75 0 0 1 1.944-.805h7.344c.729 0 1.428.29 1.944.805l4.329 4.329a2.75 2.75 0 0 1 .805 1.944v7.344c0 .729-.29 1.428-.805 1.944l-4.329 4.329a2.75 2.75 0 0 1-1.944.805H8.328a2.75 2.75 0 0 1-1.944-.805l-4.329-4.329a2.75 2.75 0 0 1-.805-1.944V8.328c0-.729.29-1.428.805-1.944z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Polygon;
