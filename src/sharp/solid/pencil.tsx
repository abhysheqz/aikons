import React from "react";
const Pencil: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .624.334l6.126 9.189V22a.75.75 0 0 1-.75.75h-5.25v-12.5h3.85l-2.334-3.5h-4.53l-2.334 3.5h3.848v12.5H6a.75.75 0 0 1-.75-.75V10.773l6.126-9.189A.75.75 0 0 1 12 1.25"
      />
    </svg>
  );
};
export default Pencil;
