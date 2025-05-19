import React from "react";
const EquipmentChestPress: React.FC<
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
        d="M9.267 7.843A.75.75 0 0 1 10 7.25h4a.75.75 0 0 1 .733.593l1.5 7a.75.75 0 0 1-.733.907h-7a.75.75 0 0 1-.733-.907z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.293 16.793A1 1 0 0 1 9 16.5h6a1 1 0 0 1 .707.293l1.5 1.5-1.414 1.414-1.207-1.207H9.414l-1.207 1.207-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 21v-3.5h-2V21H5v2h14v-2zM6.22 3.375A1 1 0 0 1 7 3h10a1 1 0 0 1 .78.375l4 5A1 1 0 0 1 22 9v5h-2V9.35L16.52 5H7.48L4 9.35V14H2V9a1 1 0 0 1 .22-.625z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 13h3v-2h-3zM6 11H3v2h3zM11 1v7h2V1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentChestPress;
