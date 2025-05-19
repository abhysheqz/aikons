import React from "react";
const AddToList: React.FC<
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
        d="M8.05 1.553a1 1 0 0 0-1.434 1.394L7.883 4.25H3.75a1 1 0 0 0 0 2h4.133L6.616 7.553A1 1 0 0 0 8.05 8.947l2.917-3a1 1 0 0 0 0-1.394zM2.75 20V7.5h2.461a2.25 2.25 0 0 0 3.736 2.318l2.916-3a2.25 2.25 0 0 0 0-3.136L9.5 1.25H18.5A2.75 2.75 0 0 1 21.25 4v16a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20m10.75-3.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM12.75 7a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-2.05 2.15a.75.75 0 0 1 .15 1.05l-3 4a.75.75 0 0 1-1.13.08l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.889.888L10.4 13.55a.75.75 0 0 1 1.05-.15"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddToList;
