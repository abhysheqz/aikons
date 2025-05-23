import React from "react";
const Plant_02: React.FC<
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
        d="M13.588 10.312c.128-.123.235-.22.312-.287l.985 1.131q-.092.078-.254.235a8 8 0 0 0-.787.879c-.583.758-1.094 1.722-1.094 2.73v.75h-1.5V15c0-1.492.739-2.778 1.406-3.645.34-.442.678-.797.932-1.043"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 14.25h13.5v1.5H5.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.35 22.75-1.092-7.645h11.485L16.65 22.75zM3.27 2.17c.003-.063.07-.83.07-.83s.767-.067.83-.07a14.044 14.044 0 0 1 2.253.063c1.308.145 3.038.543 4.17 1.676A3.949 3.949 0 1 1 5.01 8.593c-1.133-1.132-1.531-2.862-1.677-4.17A14 14 0 0 1 3.27 2.17M20.664 4.336l.07.804a12.138 12.138 0 0 1-.055 1.949c-.125 1.125-.47 2.64-1.468 3.638a3.492 3.492 0 0 1-4.938-4.938c.998-.998 2.512-1.343 3.639-1.468a12 12 0 0 1 1.948-.054c.055.003.804.069.804.069"
      />
      <path
        fill="currentColor"
        d="M10.695 8.178c.063.087.15.213.252.375.204.323.472.792.738 1.392A12.45 12.45 0 0 1 12.75 15v.75h-1.5V15a10.95 10.95 0 0 0-.935-4.444 9.5 9.5 0 0 0-.637-1.201 6 6 0 0 0-.201-.301z"
      />
    </svg>
  );
};
export default Plant_02;
