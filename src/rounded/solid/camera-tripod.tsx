import React from "react";
const CameraTripod: React.FC<
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
        d="M12 18.553q-.06.09-.14.168l-4.167 4a1 1 0 0 1-1.386-1.442l4.167-4a1 1 0 0 1 1.526.168 1 1 0 0 1 1.526-.168l4.166 4a1 1 0 1 1-1.384 1.442l-4.167-4a1 1 0 0 1-.141-.168"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 17a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.448 1.25h5.104c1.6 0 2.871 0 3.878.127 1.039.13 1.892.406 2.602 1.027q.36.316.654.699c.573.744.825 1.634.946 2.722.118 1.065.118 2.415.118 4.129v.092c0 1.714 0 3.064-.118 4.13-.12 1.087-.373 1.977-.946 2.721a5 5 0 0 1-.654.699c-.71.62-1.563.896-2.602 1.027-1.007.127-2.278.127-3.878.127H9.448c-1.6 0-2.871 0-3.879-.127-1.038-.13-1.891-.406-2.6-1.027q-.361-.316-.655-.699c-.573-.744-.825-1.634-.946-2.722-.118-1.065-.118-2.415-.118-4.129v-.092c0-1.714 0-3.064.118-4.13.12-1.087.373-1.977.946-2.721q.294-.383.654-.699c.71-.62 1.563-.896 2.601-1.027 1.008-.127 2.28-.127 3.88-.127M8.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraTripod;
