import React from "react";
const AiGame: React.FC<
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
        d="M6.988 6.75H5.743a3.75 3.75 0 0 0-3.734 3.404l-.748 8.063-.001.016a3.75 3.75 0 0 0 3.739 4.017h.747a3.75 3.75 0 0 0 3.48-2.357l1.057-2.643h3.434l1.057 2.643a3.75 3.75 0 0 0 3.48 2.357h.747a3.75 3.75 0 0 0 3.74-4.017l-.002-.015-.742-8.062a3.75 3.75 0 0 0-3.734-3.406h-1.275v.322l-2.484.944-.944 2.484h-3.144l-.944-2.484-2.484-.944zM16 11.5h2.009v2H16zm-7.991 0H6v2h2.009z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.287 1.75h1.403l.257.695c.361.976.476 1.24.666 1.43s.455.305 1.43.666l.695.258V6.2l-.695.258c-.975.36-1.24.476-1.43.665s-.305.455-.666 1.43l-.257.696h-1.403l-.257-.695c-.361-.976-.477-1.24-.666-1.43s-.455-.305-1.43-.666L8.237 6.2V4.8l.695-.258c.976-.36 1.241-.476 1.43-.665.19-.19.306-.455.667-1.43z"
      />
    </svg>
  );
};
export default AiGame;
