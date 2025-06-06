import React from "react";
const ChairBarber: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.953 7.996-3.49-.874a2 2 0 0 0-2.486 1.94V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.982 13v4a2 2 0 0 1-2 2H3M11.965 14.992v5.996M10 21.001h4"
      />
      <path
        fill="currentColor"
        d="m19.357 2.023.094-.744zm.9.157.156-.734zm.675 1.323.702.266zm-4.834.754.72.211zm-1.848 7.732a.75.75 0 0 0 1.5 0zm5.012-9.222c.255.033.523.08.838.146l.313-1.467a12 12 0 0 0-.962-.167zm.97.47-3.983 10.497 1.402.532 3.983-10.497zm-4.853.808a28.7 28.7 0 0 0-1.129 7.944h1.5c0-3.027.526-5.677 1.068-7.52zM20.1 2.913c.046.01.09.04.121.101.032.063.04.144.01.223l1.403.532c.36-.95-.15-2.095-1.221-2.323zm-.649-1.634c-1.864-.238-3.55.988-4.072 2.766l1.439.423c.334-1.137 1.377-1.837 2.444-1.7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.689 15h-7.69C6.896 15 6 14.09 6 12.966s.895-2.028 1.997-1.963c1.11.066 2.557.193 4.003.438 1.646.28 3.142.711 4.156 1.044.73.24 1.049 1.08.706 1.778a1.31 1.31 0 0 1-1.173.737Z"
      />
    </svg>
  );
};
export default ChairBarber;
