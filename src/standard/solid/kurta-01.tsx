import React from "react";
const Kurta_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.664 1.664a.75.75 0 0 0-.908-.375l-4.494 1.5a.75.75 0 0 0-.502.582l-1.796 10.33a1.75 1.75 0 0 0 1.724 2.049h1.861l-.648 5.026a1.75 1.75 0 0 0 1.735 1.974h9.726a1.75 1.75 0 0 0 1.735-1.974l-.648-5.026h1.861a1.75 1.75 0 0 0 1.724-2.05L20.238 3.371a.75.75 0 0 0-.502-.582l-4.494-1.5a.75.75 0 0 0-.908.375 1.93 1.93 0 0 1-1.084.957V9a.75.75 0 0 1-1.5 0V2.621a1.93 1.93 0 0 1-1.086-.957M6.936 12.75l-.194 1.5H4.688a.25.25 0 0 1-.247-.293l.21-1.207zm13.41 0h-2.285l.194 1.5h2.055a.25.25 0 0 0 .246-.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kurta_01;
