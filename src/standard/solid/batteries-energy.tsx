import React from "react";
const BatteriesEnergy: React.FC<
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
        d="M16 12.25a.75.75 0 0 0-.75.75v1.75h7.5V13a.75.75 0 0 0-.75-.75zM22.75 16.25h-7.5v2.5h7.5zM22.75 20.25h-7.5V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.898 1.364a.75.75 0 0 1 .238 1.033L11.353 5.25H14a.75.75 0 0 1 .636 1.147l-2.5 4a.75.75 0 0 1-1.272-.795l1.783-2.852H10a.75.75 0 0 1-.636-1.148l2.5-4a.75.75 0 0 1 1.034-.238M6 6.75a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0V7c0-.967.784-1.75 1.75-1.75h.5a.75.75 0 1 1 0 1.5zM16.75 6a.75.75 0 0 1 .75-.75h.5c.967 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0V7a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 12.25a.75.75 0 0 0-.75.75v1.75h7.5V13a.75.75 0 0 0-.75-.75zM8.75 16.25h-7.5v2.5h7.5zM8.75 20.25h-7.5V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default BatteriesEnergy;
