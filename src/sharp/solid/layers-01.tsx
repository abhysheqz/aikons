import React from "react";
const Layers_01: React.FC<
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
        d="m11.516 22.624-9-5 .97-1.748 8.515 4.73 8.515-4.73.97 1.748-9 5a1 1 0 0 1-.97 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.516 17.624-9-5 .97-1.748 8.515 4.73 8.515-4.73.97 1.748-9 5a1 1 0 0 1-.97 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.636 1.344a.75.75 0 0 1 .728 0l9 5a.75.75 0 0 1 0 1.312l-9 5a.75.75 0 0 1-.728 0l-9-5a.75.75 0 0 1 0-1.312z"
      />
    </svg>
  );
};
export default Layers_01;
