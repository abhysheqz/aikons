import React from "react";
const PresentationLineChart_01: React.FC<
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
        d="M5.5 1.25A3.75 3.75 0 0 0 1.75 5v9a3.75 3.75 0 0 0 3.75 3.75h13A3.75 3.75 0 0 0 22.25 14V5a3.75 3.75 0 0 0-3.75-3.75zm3.992 8.666c.25-.33.547-.429.788-.415.245.015.545.153.776.526.527.85 1.356 1.379 2.272 1.462.92.083 1.828-.295 2.476-1.06l.96-1.134a1 1 0 0 0-1.527-1.292l-.96 1.134c-.25.296-.534.381-.769.36-.24-.022-.529-.164-.752-.524-.546-.879-1.411-1.412-2.357-1.468-.95-.056-1.87.375-2.498 1.2l-.696.914a1 1 0 1 0 1.59 1.212z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.486 18.143a1 1 0 0 1 1.029 0l5 3a1 1 0 0 1-1.03 1.715L12 20.166l-4.486 2.692a1 1 0 0 1-1.028-1.716z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationLineChart_01;
