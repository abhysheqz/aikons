import React from "react";
const Clothes: React.FC<
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
        d="M20.744 4.109a.75.75 0 0 0-.49-.63L14.128 1.25l-.299.598c-.356.71-1.072 1.085-1.83 1.085-.76 0-1.476-.375-1.832-1.085l-.299-.598-6.126 2.228a.75.75 0 0 0-.49.63l-.996 10a.75.75 0 0 0 .746.825h2.623l-.381 7.027a.75.75 0 0 0 .749.79h12.01a.75.75 0 0 0 .75-.79l-.382-7.027h2.627a.75.75 0 0 0 .746-.824zM7.727 3.625l1.461-.531c.234.3.509.55.81.749-.01 5.632-.183 10.627-2.879 11.27zm7.083-.531 1.461.531.608 11.488c-2.696-.643-2.868-5.638-2.88-11.27a3.4 3.4 0 0 0 .811-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Clothes;
