import React from "react";
const MaterialAndTexture: React.FC<
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
        d="m12 2.25 10.75 4.786-5.574 2.482 5.574 2.481-5.576 2.483 5.576 2.482L12 21.75 1.25 16.964l5.576-2.482L1.25 12l5.574-2.482L1.25 7.036zm0 9.572 3.346-1.49.61.272-6.864 3.257-1.308-.582 3.673-1.698zm-3.346-1.49.996.444-3.673 1.698L4.91 12zM4.91 7.037 12 10.192l7.09-3.156L12 3.88zM12 15.156l-1.116-.497 6.864-3.257 1.342.598z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaterialAndTexture;
