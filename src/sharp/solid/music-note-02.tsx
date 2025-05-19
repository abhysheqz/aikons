import React from "react";
const MusicNote_02: React.FC<
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
        d="M11.124 2.362a.83.83 0 0 1 .768-.033l8.422 4a.75.75 0 0 1 .436.67v6c0 .26-.142.502-.374.639a.83.83 0 0 1-.768.033l-6.858-3.258V17a4.75 4.75 0 1 1-2-3.873V3c0-.26.142-.501.374-.638"
      />
    </svg>
  );
};
export default MusicNote_02;
