import React from "react";
const Allah: React.FC<
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
        d="M12.48 1.424a.75.75 0 0 0-.96 0L8.728 3.75H4.5a.75.75 0 0 0-.75.75v4.228L1.424 11.52a.75.75 0 0 0 0 .96l2.326 2.791V19.5c0 .414.336.75.75.75h4.228l2.792 2.326a.75.75 0 0 0 .96 0l2.791-2.326H19.5a.75.75 0 0 0 .75-.75v-4.228l2.326-2.792a.75.75 0 0 0 0-.96L20.25 8.728V4.5a.75.75 0 0 0-.75-.75h-4.228zM12.25 8h-1.5v6.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 0-.897-.735l-.018.004c-.102.028-.352.096-.484.144-.278.102-.652.27-1.031.535-.776.543-1.57 1.502-1.57 3.052h1.5c0-.95.455-1.49.93-1.823l.07-.047v3.37a2.25 2.25 0 0 0 3.75 1.677 2.25 2.25 0 0 0 3.75-1.677V10h-1.5v4.5a.75.75 0 0 1-1.5 0zm4 8h1.5v-6h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Allah;
