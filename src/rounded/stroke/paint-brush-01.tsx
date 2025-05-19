import React from "react";
const PaintBrush_01: React.FC<
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
        d="M3.89 20.873 3 21l.127-.89c.194-1.356.29-2.034.591-2.635s.785-1.085 1.753-2.053L16.983 3.91c.423-.423.635-.635.863-.748a1.55 1.55 0 0 1 1.38 0c.229.113.44.325.864.748.424.424.635.635.749.864.215.435.215.945 0 1.38-.114.228-.325.44-.75.863L8.58 18.53c-.969.968-1.453 1.452-2.054 1.753s-1.279.397-2.634.59M6 15l3 3m-.5-5.5 3 3"
      />
    </svg>
  );
};
export default PaintBrush_01;
