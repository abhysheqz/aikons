import React from "react";
const Vest: React.FC<
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
        d="M13.612 2.5H9.894l4.138 9.517a2.75 2.75 0 0 1-.152 2.49L9.396 22.13a.75.75 0 0 1-.925.316l-5-2A.75.75 0 0 1 3 19.75v-9a.75.75 0 0 1 .27-.576C4.59 9.073 5.15 7.64 5.319 6.34c.174-1.335-.074-2.425-.24-2.756a.75.75 0 0 1 .336-1.006l3-1.5A.75.75 0 0 1 8.75 1h6a.75.75 0 0 1 .335.08l3 1.5a.75.75 0 0 1 .335 1.005c-.165.331-.413 1.421-.24 2.755.17 1.3.729 2.733 2.05 3.834a.75.75 0 0 1 .27.576v9a.75.75 0 0 1-.472.696l-5 2a.75.75 0 0 1-.921-.31l-1.348-2.245a.5.5 0 0 1-.005-.506l2.791-4.872a2.75 2.75 0 0 0 .136-2.463l-3.017-6.94a.5.5 0 0 1 0-.396zm-3.362 9.75a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vest;
