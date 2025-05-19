import React from "react";
const Presentation_06: React.FC<
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
        d="M12 16a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.627 19.5h2.746c.345-.001.784-.003 1.187.18.403.182.69.514.917.775l.06.07.716.817a1 1 0 1 1-1.506 1.317l-.714-.817a6 6 0 0 0-.3-.33l-.003-.003h-.005a6 6 0 0 0-.445-.008h-2.56c-.24 0-.36 0-.445.008h-.005l-.003.003c-.062.06-.142.15-.3.33l-.714.817a1 1 0 1 1-1.506-1.317l.715-.817.061-.07c.226-.26.514-.593.917-.776.403-.182.842-.18 1.187-.179M6 1.25h12A3.75 3.75 0 0 1 21.75 5v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V5A3.75 3.75 0 0 1 6 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 17a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Presentation_06;
