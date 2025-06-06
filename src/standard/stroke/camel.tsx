import React from "react";
const Camel: React.FC<
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
        strokeWidth={1.55}
        d="M19.461 8.769S22 9 22 12.5M19.46 8.769c-.774-.95-1.45-1.383-1.961-2.123-1.073-1.553-1.738-3.146-3-3.146-2 0-3 1.5-3.5 3.5-.292 1.168-.462 2.5-2 2.5-.887 0-1.38-.393-1.48-1.528-.059-.653.364-1.197.68-1.727.963-1.614-2.02-2.787-2.7-.745H4a2 2 0 0 0-2 2 1 1 0 0 0 1 1h1.5l.099.989A5.05 5.05 0 0 0 9 14l.8 3.602a2 2 0 0 1-.352 1.634L8.5 20.5H12v-6.392m7.461-5.34c.375.46.539 1.048.539 1.64V20.5h-3l.73-1.458a2 2 0 0 0 .195-1.143l-.426-3.399s-.5.5-2.5.5c-1 0-2.148-.3-2.999-.892m-.997-1.11c.22.443.571.813.997 1.11"
      />
    </svg>
  );
};
export default Camel;
