import React from "react";
const Deviantart: React.FC<
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
        d="M14.876 1.584a.75.75 0 0 1 .624-.334H19a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.133.427L15.93 12.25H19a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-7.099l-2.777 4.166a.75.75 0 0 1-.624.334H5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .133-.427L8.07 11.75H5a.75.75 0 0 1-.75-.75V6.5A.75.75 0 0 1 5 5.75h7.099z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Deviantart;
