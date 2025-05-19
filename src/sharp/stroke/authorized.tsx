import React from "react";
const Authorized: React.FC<
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
        strokeWidth={2}
        d="M8.007 16.987h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.962 12.992v-9.99H1.998v9.99"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.972 16.995c0 2.21 1.757 4.003 3.924 4.003 1.81 0 3.309-1.177 3.762-2.876h4.64v2.756a.1.1 0 0 0 .1.1h2.504a.1.1 0 0 0 .094-.067l.982-2.796h1.924a.1.1 0 0 0 .1-.102l-.038-2.666a.1.1 0 0 0-.1-.098l-10.409.058c-.624-1.367-1.983-2.315-3.56-2.315-2.166 0-3.923 1.792-3.923 4.003Z"
      />
    </svg>
  );
};
export default Authorized;
