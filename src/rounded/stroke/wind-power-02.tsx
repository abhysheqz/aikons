import React from "react";
const WindPower_02: React.FC<
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
        strokeWidth={1.5}
        d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 2.85a2.78 2.78 0 0 1 4 0l3.593 3.683a2.5 2.5 0 0 0-2.05 2zM20 15.15a2.78 2.78 0 0 1-4 0l-3.593-3.683a2.5 2.5 0 0 0 2.05-2zM20 2.85a2.78 2.78 0 0 0-4 0l-3.593 3.683a2.5 2.5 0 0 1 2.05 2zM4 15.15a2.78 2.78 0 0 0 4 0l3.594-3.683a2.5 2.5 0 0 1-2.05-2zM13.45 16l.32 2.521c.226 1.604.34 2.406.085 2.942C13.6 22 13.107 22 12.12 22h-.24c-.987 0-1.48 0-1.735-.537-.254-.536-.141-1.338.085-2.942L10.55 16"
      />
    </svg>
  );
};
export default WindPower_02;
