import React from "react";
const DragDropVertical: React.FC<
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
        d="M6 6a2 2 0 0 1 2-2h.006a2 2 0 0 1 0 4H8a2 2 0 0 1-2-2m7.994 0a2 2 0 0 1 2-2H16a2 2 0 1 1 0 4h-.006a2 2 0 0 1-2-2M6 12a2 2 0 0 1 2-2h.006a2 2 0 1 1 0 4H8a2 2 0 0 1-2-2m7.994 0a2 2 0 0 1 2-2H16a2 2 0 1 1 0 4h-.006a2 2 0 0 1-2-2M6 18a2 2 0 0 1 2-2h.006a2 2 0 1 1 0 4H8a2 2 0 0 1-2-2m7.994 0a2 2 0 0 1 2-2H16a2 2 0 1 1 0 4h-.006a2 2 0 0 1-2-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragDropVertical;
