import React from "react";
const Plug_01: React.FC<
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
        d="M8.5 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M12 16a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.53 5.25c-1.312 0-2.375 1.1-2.273 2.421l.184 2.379c.142 1.84.764 3.614 1.807 5.149l.6.885a3.83 3.83 0 0 0 3.168 1.666h1.968a3.83 3.83 0 0 0 3.168-1.666l.6-.885a10.6 10.6 0 0 0 1.808-5.15l.183-2.378c.103-1.322-.961-2.421-2.273-2.421zm3.47 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plug_01;
