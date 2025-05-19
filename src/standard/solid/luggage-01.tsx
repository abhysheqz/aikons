import React from "react";
const Luggage_01: React.FC<
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
        d="M17 5H6.5v16.5H17zm1.5 16.5h1.25a2.75 2.75 0 0 0 2.75-2.75v-11A2.75 2.75 0 0 0 19.75 5H18.5zM3.75 5H5v16.5H3.75A2.75 2.75 0 0 1 1 18.75v-11A2.75 2.75 0 0 1 3.75 5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.597 3.5a.25.25 0 0 0-.246.209L8.99 5.873a.75.75 0 1 1-1.48-.246l.361-2.165A1.75 1.75 0 0 1 9.597 2h4.306a1.75 1.75 0 0 1 1.726 1.462l.36 2.165a.75.75 0 1 1-1.479.246l-.36-2.164a.25.25 0 0 0-.247-.209z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Luggage_01;
