import React from "react";
const MusicNoteSquare_01: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm10.96 3.043a1 1 0 0 1 1.122.402c.09.135.165.294.217.406a34.485 34.485 0 0 0 .187.41c.134.29.285.593.471.872.38.57.783.867 1.293.867h.5v2h-.5a3.17 3.17 0 0 1-2-.698V14.5a3.5 3.5 0 1 1-2-3.163V7a1 1 0 0 1 .71-.957"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNoteSquare_01;
