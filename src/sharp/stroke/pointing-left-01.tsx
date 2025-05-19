import React from "react";
const PointingLeft_01: React.FC<
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
        d="M8.087 4.043H2.782m1.827-2.49-2.485 2.49 2.485 2.49M21.975 10.367h-2.029l-5.814-4.436a2.3 2.3 0 0 0-.382-.229 1.8 1.8 0 0 0-.453-.162c-.071-.013-.112-.013-.285-.014-.26 0-.476.024-.746.145-.135.06-.3.192-.395.264-.377.29-.583.788-.599 1.3-.015.508.23.866.6 1.214.726.684 1.355 1.25 2.183 2.064h-9.88c-.525-.002-1.148.099-1.494.463-.752.858-.757 1.633-.007 2.54.346.38.89.467 1.428.47h5.496c-.166 2.576.837 5.227 2.114 6.512.866.982 1.76 1.084 3.204.866 1.667-.296 2.675-.846 5.017-1.994h1.99"
      />
    </svg>
  );
};
export default PointingLeft_01;
