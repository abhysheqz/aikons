import React from "react";
const Monster: React.FC<
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
        d="M2.75 12.5a9.25 9.25 0 0 1 18.5 0 9.27 9.27 0 0 1-3 6.838V20a2.75 2.75 0 0 1-2.75 2.75h-7A2.75 2.75 0 0 1 5.75 20v-.662a9.27 9.27 0 0 1-3-6.838M12 7.25c-2.713 0-5.25 1.738-5.25 4.25s2.537 4.25 5.25 4.25 5.25-1.738 5.25-4.25S14.713 7.25 12 7.25m0 3.25a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm-1.98 6.959a.75.75 0 1 0-1.04 1.082A4.35 4.35 0 0 0 12 19.75c1.172 0 2.24-.46 3.02-1.209a.75.75 0 1 0-1.04-1.082 2.85 2.85 0 0 1-1.98.791 2.85 2.85 0 0 1-1.98-.791"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.788 3.85c-.508.537-.765 1.119-.805 1.332a1 1 0 0 1-1.966-.364c.127-.687.62-1.605 1.32-2.343C17.054 1.718 18.132 1 19.5 1a1 1 0 1 1 0 2c-.632 0-1.22.332-1.712.85M3.5 2a1 1 0 0 1 1-1c1.368 0 2.446.718 3.163 1.475.7.738 1.193 1.656 1.32 2.343a1 1 0 1 1-1.966.364c-.04-.213-.297-.795-.805-1.332C5.72 3.332 5.132 3 4.5 3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Monster;
