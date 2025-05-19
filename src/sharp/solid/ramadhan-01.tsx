import React from "react";
const Ramadhan_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.4 4.9 18 2.5l-1.4 2.4-2.6.656L15.8 7.5l-.672 3L18 9.3l2.872 1.2-.672-3L22 5.556z"
      />
      <path
        fill="currentColor"
        d="M3 11.805c0 5.354 4.34 9.695 9.695 9.695 4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.963 2.5C5.94 3.68 3 7.399 3 11.805"
      />
    </svg>
  );
};
export default Ramadhan_01;
