import React from "react";
const Tan: React.FC<
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
        d="M9.542 6.713A1 1 0 0 1 10.5 6h1a1 1 0 0 1 .958.713l3 10a1 1 0 1 1-1.916.574L12.556 14H9.444l-.986 3.287a1 1 0 0 1-1.916-.574zM10.044 12h1.912L11 8.813zM16.77 6.027a1 1 0 0 1 1.124.526L21 12.764V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1.894.447L18 11.237V17a1 1 0 1 1-2 0V7a1 1 0 0 1 .77-.973M1 7a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H5.5v9a1 1 0 1 1-2 0V8H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tan;
