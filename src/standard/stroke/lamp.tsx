import React from "react";
const Lamp: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M12 13v6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22h6l-.544-1.633A2 2 0 0 0 12.559 19h-1.117a2 2 0 0 0-1.898 1.367zM3.643 11.586 7.2 3.76A3 3 0 0 1 9.93 2h4.137A3 3 0 0 1 16.8 3.759l3.558 7.827a1 1 0 0 1-.91 1.414H4.553a1 1 0 0 1-.91-1.414Z"
      />
    </svg>
  );
};
export default Lamp;
