import React from "react";
const Sorting_03: React.FC<
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
        d="M3.344 17.272c.176-.022.392-.022.568-.022H4.5V3a1 1 0 0 1 2 0v14.25h.588c.176 0 .392 0 .568.022h.003c.127.016.703.088.977.653.275.567-.027 1.067-.092 1.176l-.34.468c-.294.376-.7.89-1.08 1.281-.19.195-.407.397-.638.555-.205.142-.555.345-.986.345s-.78-.203-.986-.344a4.4 4.4 0 0 1-.638-.556c-.38-.39-.786-.905-1.08-1.281l-.34-.468c-.065-.109-.367-.609-.092-1.176.274-.565.85-.637.977-.653z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M11 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M13 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M9 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_03;
