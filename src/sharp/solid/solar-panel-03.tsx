import React from "react";
const SolarPanel_03: React.FC<
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
        d="M8.25 9a3.75 3.75 0 1 1 7.5 0v.75h-7.5zM11.25 11.25v5H3.94l1.34-4.466a.75.75 0 0 1 .718-.534zM12.75 11.25v5h7.307l-1.34-4.466A.75.75 0 0 0 18 11.25zM20.507 17.75H12.75v5H21a.75.75 0 0 0 .718-.965zM11.25 22.75v-5H3.49l-1.21 4.035A.75.75 0 0 0 3 22.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 1.25v2.5h-1.5v-2.5zM17.25 8.25h2.5v1.5h-2.5zM4.25 8.25h2.5v1.5h-2.5zM18.01 4.05l-1.768 1.768-1.06-1.06 1.767-1.768zM7.05 2.99l1.767 1.767-1.06 1.061L5.989 4.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarPanel_03;
