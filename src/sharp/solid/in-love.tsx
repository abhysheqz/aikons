import React from "react";
const InLove: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12c0-1.649-.371-3.211-1.035-4.608a8.6 8.6 0 0 1-2.045 1.035l-.42.15-.42-.15c-2.387-.85-3.795-2.337-4.207-3.99-.241-.964-.118-1.967.336-2.775A10.8 10.8 0 0 0 12 1.25m0 15c1.39 0 2.624-.666 3.4-1.7l1.2.9a5.74 5.74 0 0 1-4.6 2.3 5.74 5.74 0 0 1-4.6-2.3l1.2-.9a4.24 4.24 0 0 0 3.4 1.7m-3.294-7.5c-.651 0-1.276.259-1.737.72l1.06 1.06c.18-.18.423-.28.677-.28H10v-1.5zM14 10.25h1.293c.254 0 .497.1.677.28l1.06-1.06a2.46 2.46 0 0 0-1.737-.72h-1.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.65 1.498c-1.397-.713-2.4.339-2.4.339s-1.003-1.052-2.4-.339c-1.692.865-1.814 4.25 2.4 5.752 4.214-1.503 4.092-4.887 2.4-5.752"
      />
    </svg>
  );
};
export default InLove;
