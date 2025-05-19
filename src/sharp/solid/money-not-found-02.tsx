import React from "react";
const MoneyNotFound_02: React.FC<
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
        d="M9.879 9.879a3 3 0 1 0 4.242 4.242l5.629 5.629H1.25V4.25h3zM4.5 12.999h2.01v-2H4.5zM22.75 19.215l-7.81-7.81a3 3 0 0 0-2.346-2.347L7.785 4.25H22.75zM17.5 13h2.01v-2H17.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m22.25 20.836-1.414 1.414L1.75 3.164 3.164 1.75z"
      />
    </svg>
  );
};
export default MoneyNotFound_02;
