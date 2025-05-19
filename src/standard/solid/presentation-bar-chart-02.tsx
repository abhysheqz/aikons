import React from "react";
const PresentationBarChart_02: React.FC<
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
        d="M12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.627 19.5h2.746c.345-.001.784-.003 1.187.18.403.182.69.514.917.775l.06.07.716.817a1 1 0 1 1-1.506 1.317l-.714-.817a6 6 0 0 0-.3-.33l-.003-.003h-.005a6 6 0 0 0-.445-.008h-2.56c-.24 0-.36 0-.445.008h-.005l-.003.003c-.062.06-.142.15-.3.33l-.714.817a1 1 0 1 1-1.506-1.317l.715-.817.061-.07c.226-.26.514-.593.917-.776.403-.182.842-.18 1.187-.179M5.5 1.25A3.75 3.75 0 0 0 1.75 5v10a3.75 3.75 0 0 0 3.75 3.75h13A3.75 3.75 0 0 0 22.25 15V5a3.75 3.75 0 0 0-3.75-3.75zM13 7a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zm8 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_02;
