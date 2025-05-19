import React from "react";
const Lamp_05: React.FC<
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
        d="m13.99 13.993 1 8.005h-6l1-8.005M7.99 13.993h8M11.99 9.991v4.002M9.408 18.996h5.145"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.891 9.995-9.808.001c-.067 0-1.101.072-1.083 0l2.983-7.994h5.972L18 9.996c.019.073-1.04 0-1.108 0Z"
      />
    </svg>
  );
};
export default Lamp_05;
