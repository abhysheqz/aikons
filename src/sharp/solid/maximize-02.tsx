import React from "react";
const Maximize_02: React.FC<
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
        d="M11.944 4.096a2.47 2.47 0 0 1 4.793 1.19L15.72 9.595l.887.142.023.003c.942.141 1.685.253 2.276.381.6.13 1.102.29 1.544.554 1.277.765 2.299 1.988 2.299 3.799 0 1.087-.262 1.87-.777 3.409l-.132.393-.008.024-1.83 4.45h-9.36l-5.836-7.189a2.49 2.49 0 0 1 3.552-3.46l1.223 1.049z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.189 2.75H7v-1.5h3.75V5h-1.5V3.81L7.418 5.641l-1.06-1.06zM5.641 7.42 3.81 9.25H5v1.5H1.25V7h1.5v1.19l1.83-1.831z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maximize_02;
