import React from "react";
const Bullet: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.7 9.641c.781-.967 1.385-2.225 1.803-3.25.252-.618.446-1.178.578-1.584C21.146 4.604 21.5 3 21.5 3s-1.604.354-1.807.42c-.406.131-.966.326-1.585.578-1.024.417-2.282 1.021-3.25 1.802zm-.905 1.216-4.152-4.152-1.352.902-.062.062 4.602 4.603.063-.063zm-2.025 2.475L11.168 8.73l-5.304 5.304a2.24 2.24 0 0 0-.657 1.469c-.534.03-1.06.248-1.468.656L2.5 17.398 7.102 22l1.239-1.238c.408-.409.627-.935.656-1.47a2.24 2.24 0 0 0 1.469-.655z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bullet;
