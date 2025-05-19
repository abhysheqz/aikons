import React from "react";
const MusicNote_04: React.FC<
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
        d="M12.75 17.01a4.75 4.75 0 1 1-2-3.883V2.25h2c1.852 0 3.735 1.017 5.18 2.225 1.64 1.369 2.82 3.314 2.82 5.525a.75.75 0 0 1-1.28.53c-.264-.263-.736-.539-1.378-.76a7.9 7.9 0 0 0-2.11-.4c-1.433-.075-2.628.247-3.232.895v6.745"
      />
    </svg>
  );
};
export default MusicNote_04;
