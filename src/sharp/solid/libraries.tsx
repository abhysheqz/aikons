import React from "react";
const Libraries: React.FC<
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
        d="M7 4H2v16h5zM13 7H8v13h5zM14 10.92v-2.5L17.896 7 22 18.288 17.302 20z"
      />
    </svg>
  );
};
export default Libraries;
