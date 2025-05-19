import React from "react";
const Telephone: React.FC<
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
        d="M9.82 9.25a1.75 1.75 0 0 0-1.716 1.407l-.264 1.32-3.978 1.807a2.75 2.75 0 0 0-1.612 2.504V21c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 21v-4.712a2.75 2.75 0 0 0-1.612-2.504l-3.978-1.808-.264-1.32A1.75 1.75 0 0 0 14.18 9.25zm2.18 5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 4.392v2.273a3 3 0 0 1-1.898 2.79L2.367 10.93A1 1 0 0 1 1 10V8.044c0-1.588.76-3.177 2.261-3.993.94-.511 2.183-1.092 3.492-1.425 3.283-.835 7.21-.835 10.494 0 1.309.333 2.552.914 3.492 1.425C22.239 4.867 23 6.456 23 8.044V10a1 1 0 0 1-1.367.93l-3.735-1.475A3 3 0 0 1 16 6.665V4.392c-2.545-.523-5.455-.523-8 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Telephone;
