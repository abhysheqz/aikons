import React from "react";
const Rectangular_01: React.FC<
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
        d="M15.5 8.422v12.579l-9.596-.042 2.01-2.005h5.587V16.96H8.5V8.922h-2v8.62l-2 1.995V6.985h9.613l6-5.985H7.501c-.265 0-.52.105-.707.292l-4.001 3.99a1 1 0 0 0-.293.705v15.96c0 .549.445.994.996.997l13 .056c.269.001.527-.106.716-.297l4-4.046a1 1 0 0 0 .289-.7L21.5 2.437z"
      />
    </svg>
  );
};
export default Rectangular_01;
