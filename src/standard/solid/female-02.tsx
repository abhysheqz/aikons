import React from "react";
const Female_02: React.FC<
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
        d="m14.49 16.5 4.493 1.121a2 2 0 0 1 1.517 1.94v.939a1 1 0 0 1-1.002 1H4.502A1 1 0 0 1 3.5 20.473l.026-.96a2 2 0 0 1 1.51-1.885L9.482 16.5v-2.155c-1.287-.163-2.473-.448-3.505-.829.5-.984 1.001-2.46 1.001-5.903 0-5.904 5.51-5.904 7.012-3.936 3.004-.492 3.004 1.968 3.004 4.92 0 2.36.668 4.263 1.002 4.92-1.032.38-2.219.665-3.506.828z"
      />
    </svg>
  );
};
export default Female_02;
