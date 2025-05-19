import React from "react";
const KeyGeneratorFob: React.FC<
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
        d="M13.827 1.25c.734 0 1.354 0 1.857.063.536.067 1.023.214 1.45.565.424.35.66.796.828 1.304.156.476.281 1.12.419 1.828.58 2.996 1.369 7.503 1.369 9.99a7.75 7.75 0 0 1-15.5 0c0-2.487.788-6.994 1.37-9.99.137-.708.262-1.352.418-1.828.168-.508.404-.953.829-1.304.426-.351.913-.498 1.449-.565.503-.063 1.123-.063 1.857-.063zM12 11.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 15a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m5.5-10a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyGeneratorFob;
