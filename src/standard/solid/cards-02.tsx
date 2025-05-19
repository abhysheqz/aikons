import React from "react";
const Cards_02: React.FC<
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
        d="M11.025 2.017a2.75 2.75 0 0 0-3.556 1.61L6.493 6.25H5A2.75 2.75 0 0 0 2.25 9v11A2.75 2.75 0 0 0 5 22.75h9a2.75 2.75 0 0 0 2.742-2.546L21.01 8.737a2.75 2.75 0 0 0-1.599-3.53zm5.725 13.867 2.854-7.67a1.25 1.25 0 0 0-.726-1.604L10.49 3.418a1.25 1.25 0 0 0-1.616.733L8.094 6.25H14A2.75 2.75 0 0 1 16.75 9zM9.5 11.57q.135-.076.303-.143c.525-.209 1.265-.302 2.088.107 1.09.541 1.581 1.814 1.263 3.055-.325 1.265-1.44 2.436-3.408 3.119a.75.75 0 0 1-.492 0c-1.967-.683-3.083-1.854-3.407-3.119-.319-1.24.173-2.514 1.262-3.055.823-.409 1.563-.316 2.088-.107q.168.067.303.143"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cards_02;
