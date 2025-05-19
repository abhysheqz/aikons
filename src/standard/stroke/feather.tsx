import React from "react";
const Feather: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.895 10.119A3 3 0 0 0 7 12.256V17h4.744a3 3 0 0 0 2.137-.895l5.898-5.986a4.17 4.17 0 1 0-5.898-5.898zM3 21 15 9M12 12h2.5"
      />
    </svg>
  );
};
export default Feather;
