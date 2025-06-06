import React from "react";
const Tick_01: React.FC<
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
        d="M19.938 6.152a1 1 0 0 1-.59 1.286c-1.059.393-2.22 1.21-3.397 2.29-1.164 1.071-2.287 2.346-3.272 3.583a52 52 0 0 0-3.266 4.613l-.044.073-.011.017-.003.004a1.002 1.002 0 0 1-1.723-.022c-.95-1.66-1.734-2.409-2.205-2.739a1.8 1.8 0 0 0-.5-.26A1 1 0 0 1 5 13c.118.008.397.04.569.102.273.087.614.243 1.004.516.56.392 1.217 1.02 1.933 2.027l.11-.165a54 54 0 0 1 2.499-3.415c1.022-1.284 2.216-2.645 3.483-3.809 1.256-1.154 2.642-2.17 4.054-2.693a1 1 0 0 1 1.285.59"
      />
    </svg>
  );
};
export default Tick_01;
