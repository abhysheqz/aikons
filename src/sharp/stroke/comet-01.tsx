import React from "react";
const Comet_01: React.FC<
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
        strokeWidth={1.5}
        d="M4.05 10.05a7 7 0 0 0 9.9 9.9L17.899 16M12.1 2 6.5 7.6M22 11.9l-2 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.121 12.879A3 3 0 1 1 6.88 17.12a3 3 0 0 1 4.242-4.242ZM6.879 12.88l7.12-7.122M17.758 2 16 3.758m6 2.485-6.636 6.637"
      />
    </svg>
  );
};
export default Comet_01;
