import React from "react";
const EquipmentGym_02: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v2h16V3a1 1 0 1 1 2 0v2a1 1 0 1 1 0 2v13.5a1 1 0 1 1-2 0V7h-3.5v2.179c1.202.447 1.999 1.678 1.999 3.01 0 .404-.07.793-.202 1.154a1 1 0 0 1-.94.657h-3.716a1 1 0 0 1-.94-.658 3.4 3.4 0 0 1-.202-1.153c0-1.332.798-2.564 2.001-3.011V7h-5v2.178c1.202.448 2 1.679 2 3.011 0 .404-.071.793-.202 1.153a1 1 0 0 1-.94.658H6.642a1 1 0 0 1-.94-.658A3.4 3.4 0 0 1 5.5 12.19c0-1.332.798-2.563 2-3.01V7H4v13.5a1 1 0 1 1-2 0V7a1 1 0 0 1 0-2V3a1 1 0 0 1 1-1m5.5 9c-.428 0-.907.37-.988 1h1.976c-.08-.63-.56-1-.988-1m6.999 0c.428 0 .907.37.988 1h-1.976c.08-.63.56-1 .988-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_02;
