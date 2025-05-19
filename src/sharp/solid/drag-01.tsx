import React from "react";
const Drag_01: React.FC<
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
        d="m9.266 20.5-4.318-5.703a2.53 2.53 0 0 1-.007-3.101 2.4 2.4 0 0 1 3.504-.337l.024.022.945.993V4a2.5 2.5 0 0 1 5 0v4.997c1.864.064 4.57.639 6.603 2.686.936.942.992 2.32.821 3.46-.176 1.177-.627 2.343-.999 3.12l-.697 1.454-.336.7V23H9.266z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 7.414 3.207-3.207L19.043 1l-1.415 1.414.793.793h-2.085v2h2.085L17.628 6zM5.579 5.207 6.372 6 4.957 7.414 1.75 4.207 4.957 1l1.415 1.414-.793.793h2.085v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drag_01;
