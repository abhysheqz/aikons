import React from "react";
const Fry: React.FC<
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
        d="M14.772 5.987a3.24 3.24 0 1 0 0 6.481 3.24 3.24 0 0 0 0-6.481m.01 4.238a.997.997 0 1 0 0-1.995h-.01a.997.997 0 0 0 0 1.995z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.048 9.726a8.226 8.226 0 1 1 16.452 0 8.226 8.226 0 0 1-16.452 0m3.988-.498a4.736 4.736 0 1 1 9.473 0 4.736 4.736 0 0 1-9.473 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.32 15.74 2.556 22.5 1.5 21.442l6.762-6.76z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fry;
