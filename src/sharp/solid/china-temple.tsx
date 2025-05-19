import React from "react";
const ChinaTemple: React.FC<
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
        d="m17.31 9.997.22.18c.572.467 2.325 1.456 4.47 1.456h.75v.614c0 .497-.131.925-.403 1.275-.274.352-.653.578-1.047.719-.718.257-1.566.256-2.101.256H4.8c-.535 0-1.383 0-2.1-.256-.395-.141-.774-.367-1.048-.719-.272-.35-.403-.778-.403-1.275v-.614H2c2.145 0 3.898-.989 4.47-1.456l.22-.18zM14.31 1l.22.185c.572.48 2.325 1.499 4.47 1.499h.75c0 .512-.131.952-.403 1.312-.274.363-.653.595-1.047.74-.718.265-1.566.264-2.101.264H7.8c-.535 0-1.383 0-2.1-.264-.395-.145-.774-.377-1.048-.74-.272-.36-.403-.8-.403-1.312H5c2.145 0 3.898-1.018 4.47-1.5L9.69 1zM6.5 6.5h11v2h-11z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 23H3v-1.5h18z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10.75 20a1.25 1.25 0 0 1 2.5 0v2h-2.5z" />
      <path
        fill="currentColor"
        d="M9.25 22v-2a2.75 2.75 0 0 1 5.5 0v2h5v-6.005c-.197.007-.37.007-.507.007H4.757c-.138 0-.31 0-.507-.007V22z"
      />
    </svg>
  );
};
export default ChinaTemple;
