import React from "react";
const Lottiefiles: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM16.854 6.5a5 5 0 0 0-4.371 2.572l-2.714 4.885A3 3 0 0 1 7.146 15.5H6a1 1 0 1 0 0 2h1.146a5 5 0 0 0 4.371-2.572l2.714-4.885A3 3 0 0 1 16.854 8.5H18a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lottiefiles;
