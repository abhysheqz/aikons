import React from "react";
const Mouse_06: React.FC<
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
        d="M13.864 3.518a1.75 1.75 0 0 1 2.374-.699l3.78 2.062a.25.25 0 0 0 .334-.09l1.006-1.678a.75.75 0 1 1 1.286.772l-1.006 1.677a1.75 1.75 0 0 1-2.339.636l-3.78-2.062a.25.25 0 0 0-.338.1l-.753 1.38a.75.75 0 0 1-1.317-.718z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.15 3.753c-2.053-.998-4.528-.49-5.946 1.331a34 34 0 0 0-2.545 3.73 34 34 0 0 0-2.06 4.209 4.515 4.515 0 0 0 1.724 5.542c.657.43 1.434.912 2.322 1.419a45 45 0 0 0 2.402 1.28 4.605 4.605 0 0 0 5.695-1.29 34.5 34.5 0 0 0 2.654-3.868 34 34 0 0 0 1.992-4.047c.888-2.131.092-4.515-1.812-5.778a39 39 0 0 0-2.166-1.345 39 39 0 0 0-2.26-1.183m1.182 4.802a1 1 0 0 0-1.664-1.11l-1 1.5a1 1 0 1 0 1.664 1.11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_06;
