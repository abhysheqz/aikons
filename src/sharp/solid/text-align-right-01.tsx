import React from "react";
const TextAlignRight_01: React.FC<
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
        d="M14.5 5.5h-10v-2h10zM14.5 10.5h-5v-2h5zM14.5 15.5h-10v-2h10zM14.5 20.5h-5v-2h5zM17.5 21V3h2v18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextAlignRight_01;
