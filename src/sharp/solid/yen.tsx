import React from "react";
const Yen: React.FC<
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
        d="M11 11.395 4 3.859 5.465 2.5 12 9.531 18.534 2.5 20 3.86 13 11.394V21.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.833 14.447H6.166v-2h11.667zM17.833 18.447H6.166v-2h11.667z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Yen;
