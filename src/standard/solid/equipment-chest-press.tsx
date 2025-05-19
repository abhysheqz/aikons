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
        fillRule="evenodd"
        d="M13 2a1 1 0 1 0-2 0v1H7.48a2 2 0 0 0-1.561.75l-3.48 4.351A2 2 0 0 0 2 9.351V13.5a1 1 0 1 0 2 0V13h1.5a1 1 0 1 0 0-2H4V9.35L7.48 5H11v2.25h-.192a1.75 1.75 0 0 0-1.71 1.383l-1.072 5a1.75 1.75 0 0 0 1.711 2.117h4.526a1.75 1.75 0 0 0 1.711-2.117l-1.071-5a1.75 1.75 0 0 0-1.711-1.383H13V5h3.52L20 9.35V11h-1.5a1 1 0 1 0 0 2H20v.5a1 1 0 1 0 2 0V9.35a2 2 0 0 0-.438-1.249l-3.48-4.35A2 2 0 0 0 16.518 3H13zM9.414 16.5A2 2 0 0 0 8 17.086l-1.207 1.207a1 1 0 1 0 1.414 1.414L9.414 18.5H11V21H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H13v-2.5h1.586l1.207 1.207a1 1 0 0 0 1.414-1.414L16 17.086a2 2 0 0 0-1.414-.586H9.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentChestPress;
