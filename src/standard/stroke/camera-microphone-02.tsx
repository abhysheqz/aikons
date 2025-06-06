import React from "react";
const CameraMicrophone_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h3.5l.772-2.316A1 1 0 0 1 9.221 3h5.558a1 1 0 0 1 .949.684L16.5 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 16c1.396 0 3-1 3.5-2M12 16c-1.396 0-3-1-3.5-2m3.5 2v2m0-4.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 3 0V12a1.5 1.5 0 0 1-1.5 1.5Z"
      />
    </svg>
  );
};
export default CameraMicrophone_02;
