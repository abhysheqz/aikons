import React from "react";
const Bread_04: React.FC<
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
        d="M8.5 4C5.043 4 2 5.593 2 7.559c0 1.364 1.643 2.38 1.433 3.662l-.244 4.557c-.106 1.98-.159 2.97.41 3.596C4.17 20 5.126 20 7.036 20h2.93c1.91 0 2.865 0 3.435-.626.57-.625.517-1.616.41-3.596l-.243-4.557C13.357 9.938 15 8.923 15 7.559 15 5.593 11.957 4 8.5 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 20h6.184c1.827 0 2.74 0 3.286-.626.545-.625.494-1.616.393-3.596l-.234-4.557C20.429 9.938 22 8.923 22 7.559 22 5.593 19.09 4 15.783 4H8"
      />
    </svg>
  );
};
export default Bread_04;
