import React from "react";
const GraduateMale: React.FC<
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
        d="M6 13v2c0 2.384 1.423 3.86 3.008 4.795.791.466 1.591.774 2.2.966a10 10 0 0 0 .792.217 9 9 0 0 0 .793-.217c.608-.191 1.408-.5 2.2-.966C16.576 18.86 18 17.385 18 15v-2h2v2c0 3.366-2.077 5.39-3.992 6.518-.959.565-1.909.928-2.613 1.15a13 13 0 0 1-1.115.296l-.071.014-.022.004-.007.002h-.003L12 22l-.177.984h-.003l-.007-.002-.022-.004-.071-.014-.252-.056c-.211-.05-.508-.128-.863-.24a12.8 12.8 0 0 1-2.613-1.15C6.077 20.389 4 18.366 4 15v-2zm6 9-.176.984q.177.031.352 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.7 9.046C6.811 8.381 9.32 8 12 8s5.188.38 7.3 1.046A1 1 0 0 1 20 10v3.5a1 1 0 0 1-1.3.954c-1.898-.598-4.202-.954-6.7-.954s-4.802.356-6.7.954A1 1 0 0 1 4 13.5V10a1 1 0 0 1 .7-.954"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.575 1.355a3.04 3.04 0 0 1 2.85 0l8.524 4.532a1.96 1.96 0 0 1 .103 3.416l-2.53 1.55a1 1 0 0 1-.823.1C16.802 10.357 14.498 10 12 10s-4.802.356-6.7.954a1 1 0 0 1-.822-.101l-2.53-1.55a1.96 1.96 0 0 1 .103-3.416z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GraduateMale;
