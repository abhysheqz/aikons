import React from "react";
const Sword_01: React.FC<
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
        d="M4.194 12.25a.944.944 0 1 0 0 1.889h.54c.25 0 .49.1.668.277L6.786 15.8l-2.812 2.812a3.4 3.4 0 0 0-1.078-.351 1 1 0 1 0-.292 1.978c.282.042.552.17.77.387.217.218.345.488.387.77a1 1 0 0 0 1.978-.292 3.4 3.4 0 0 0-.351-1.078L8.2 17.214l1.384 1.384a.94.94 0 0 1 .277.668v.54a.944.944 0 1 0 1.889 0v-.54c0-.752-.299-1.472-.83-2.004L6.738 13.08a2.83 2.83 0 0 0-2.004-.83z"
      />
      <path
        fill="currentColor"
        d="M22.03 1.97a.75.75 0 0 1 .2.699l-1.007 4.365a2.75 2.75 0 0 1-.904 1.481L9.465 17.09a.75.75 0 0 1-.995-.059l-1.5-1.5a.75.75 0 0 1-.059-.995l8.574-10.854.021-.026a2.75 2.75 0 0 1 1.46-.878l4.365-1.008a.75.75 0 0 1 .7.2"
      />
    </svg>
  );
};
export default Sword_01;
