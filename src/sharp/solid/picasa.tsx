import React from "react";
const Picasa: React.FC<
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
        d="M15.249 1.75v6.44L8.796 1.735A10.8 10.8 0 0 1 12 1.25c1.132 0 2.224.175 3.249.5M16.749 2.353a10.75 10.75 0 0 1 6 9.647c0 1.133-.174 2.225-.5 3.25h-5.5zM21.646 16.75a10.75 10.75 0 0 1-9.646 6c-1.133 0-2.225-.175-3.251-.5v-5.5zM7.249 21.646a10.8 10.8 0 0 1-4.91-4.926l4.91-4.91zM1.735 15.203 10.938 6l-3.66-3.66A10.75 10.75 0 0 0 1.25 12c0 1.116.17 2.191.485 3.203"
      />
    </svg>
  );
};
export default Picasa;
