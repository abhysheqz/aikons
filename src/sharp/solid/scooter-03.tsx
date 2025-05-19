import React from "react";
const Scooter_03: React.FC<
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
        d="M6 5h3.437a2.751 2.751 0 0 0 5.126 0H18V3h-3.437a2.75 2.75 0 0 0-5.126 0H6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 22.75v-7h2v7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 7.75a.75.75 0 0 0-.73.576l-2.5 10.5a.75.75 0 0 0 .73.924h4.5v-5.5h5v5.5H19a.75.75 0 0 0 .73-.924l-2.5-10.5a.75.75 0 0 0-.73-.576z"
      />
    </svg>
  );
};
export default Scooter_03;
