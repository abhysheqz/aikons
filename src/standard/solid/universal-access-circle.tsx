import React from "react";
const UniversalAccessCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.25-5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M7.143 8.486a1 1 0 0 1 1.372-.343c.849.509 2.087.854 3.485.857 1.398-.003 2.637-.348 3.486-.857a1 1 0 1 1 1.029 1.715c-.72.432-1.578.755-2.515.945v3.074l.97 3.88a1 1 0 1 1-1.94.485L12.22 15h-.439l-.81 3.242a1 1 0 0 1-1.94-.485l.97-3.88v-3.074c-.938-.19-1.795-.513-2.515-.945a1 1 0 0 1-.343-1.372"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UniversalAccessCircle;
