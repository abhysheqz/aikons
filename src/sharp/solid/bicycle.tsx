import React from "react";
const Bicycle: React.FC<
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
        d="M15 3h-1.283l1.215 4.822-2.518 4.029L9.156 8H10V6H5v2h1.536l4.765 5.631-.534.855A5.002 5.002 0 0 0 1 16a5 5 0 0 0 9.9 1h.654l1.833-2.932a5 5 0 1 0 4.41-3.064l-1.505-5.97c.643.04 1.173.12 1.602.272.602.213.962.544 1.143 1.188l1.925-.543c-.38-1.35-1.27-2.13-2.402-2.53C17.512 3.05 16.244 3 15 3m1.36 10.487.696 2.757 1.94-.489-.691-2.74a3 3 0 1 1-1.944.472m-.505-2.005-.245-.972-1.372 2.197c.447-.511.997-.93 1.617-1.225M8.83 15H6v2h2.83a3.001 3.001 0 1 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle;
