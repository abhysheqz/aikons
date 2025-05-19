import React from "react";
const WindPower_03: React.FC<
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
        d="M12 9.25a1.249 1.249 0 1 0 .002 2.498 1.249 1.249 0 0 0-.003-2.498M9.253 10.5c0-1.519 1.23-2.75 2.746-2.75a2.75 2.75 0 0 1 2.745 2.75c0 1.519-1.23 2.75-2.745 2.75a2.75 2.75 0 0 1-2.746-2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.498 1.25A3.747 3.747 0 0 0 9.754 5v3.917a2.74 2.74 0 0 1 4.492.003V1.25zM14.67 9.858q.074.31.075.642c0 1.519-1.23 2.75-2.746 2.75a2.748 2.748 0 0 1-2.67-3.39L3 13.742l.365.632a3.74 3.74 0 0 0 5.114 1.373l.012-.007L12 13.533l3.507 2.208.013.007a3.74 3.74 0 0 0 5.114-1.373l.364-.633z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.729 16.734-.472 5.198a.75.75 0 0 0 .745.818h3.993a.75.75 0 0 0 .746-.818l-.471-5.198L12 15.305z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WindPower_03;
