import React from "react";
const PointingRight_02: React.FC<
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
        d="M6.814 7.6q-.155.098-.296.183c-.433.263-1.305.86-2.049 1.374-.376.26-.727.506-.983.685L3.26 10H1.25v10.392h2.58l2.157 1.033c.777.372 1.943.822 3.12.999 1.14.17 2.518.115 3.46-.821 2.047-2.034 2.622-4.74 2.685-6.603h4.998a2.5 2.5 0 0 0 0-5h-5.884c-.234-.294-.626-.77-1.089-1.27-.372-.402-.8-.831-1.238-1.197-.425-.356-.913-.698-1.401-.868-.872-.303-1.677-.148-2.358.133-.523.215-1.035.534-1.465.803"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.545 1.5 3.207 3.207-3.207 3.207L18.131 6.5l.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_02;
