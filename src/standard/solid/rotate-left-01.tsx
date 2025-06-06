import React from "react";
const RotateLeft_01: React.FC<
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
        d="M2.562 6.434a2.36 2.36 0 0 1 3.222-.874l6.38 3.668c-.064-.268-.129-.577-.188-.977-.07-.47.01-.937.19-1.348a2.31 2.31 0 0 1 2.798-1.282 2.41 2.41 0 0 1 1.552 1.467l2.09 5.873 1.73.87a.75.75 0 0 1 .326 1.023l-4 7.5a.75.75 0 0 1-.998.317l-1.83-.919c-1.075.032-2.368.01-3.587-.221-1.277-.242-2.594-.736-3.45-1.761l-.02-.026c-.708-.928-.878-2.279-.73-3.651.095-.882.216-1.626.479-2.393a9.8 9.8 0 0 1 .84-1.787l-3.93-2.257a2.36 2.36 0 0 1-.874-3.222"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 1a1 1 0 0 1 1 1v.539c.748-.593 1.489-.978 2.149-1.168 1.482-.479 3.128-.502 4.63.061 2.061.773 3.593 2.11 4.612 4.116a1 1 0 0 1-1.783.906c-.787-1.55-1.928-2.549-3.53-3.149-1.04-.39-2.225-.386-3.328-.027l-.037.012c-.351.1-.818.324-1.34.714h.136a1 1 0 1 1 0 2H9.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateLeft_01;
