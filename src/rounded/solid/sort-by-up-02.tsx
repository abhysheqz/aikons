import React from "react";
const SortByUp_02: React.FC<
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
        d="M2 15a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1M2 9a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1M2 21a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.594 6.478c.176.022.392.022.568.022h.588V15a1 1 0 1 0 2 0V6.5h.588c.176 0 .392 0 .568-.022h.004c.126-.016.702-.088.976-.653.275-.567-.027-1.067-.092-1.176l-.34-.468c-.294-.376-.7-.89-1.08-1.281a4.4 4.4 0 0 0-.638-.556c-.205-.14-.555-.344-.986-.344s-.78.203-.986.344c-.231.16-.448.36-.638.556-.38.39-.786.905-1.08 1.281l-.34.468c-.065.109-.367.609-.092 1.176.274.565.85.637.976.653z"
      />
    </svg>
  );
};
export default SortByUp_02;
