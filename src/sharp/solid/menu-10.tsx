import React from "react";
const Menu_10: React.FC<
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
        d="M19 10H5V8h14zM10.746 5.25c0-.69.557-1.25 1.245-1.25H12c.688 0 1.245.56 1.245 1.25S12.689 6.5 12 6.5h-.009c-.688 0-1.245-.56-1.245-1.25M19 15H5v-2h14zM19 20H5v-2h14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Menu_10;
