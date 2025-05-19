import React from "react";
const BioEnergy: React.FC<
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
        d="M2.25 12a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75 3.25 3.25 0 0 0 6.5 0 .75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75c-1.224 0-2.085.597-2.517 1.46-.44.882-.474 2.131.188 3.455a.75.75 0 0 1-.255.959l-3 2a.75.75 0 0 1-1.086-.287c-.299-.595-.604-.976-.945-1.215-.33-.23-.756-.372-1.385-.372s-1.055.141-1.385.372c-.341.239-.646.62-.945 1.215a.75.75 0 0 1-1.086.287l-3-2a.75.75 0 0 1-.255-.96c.662-1.323.628-2.572.188-3.454-.432-.863-1.293-1.46-2.517-1.46a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 2A.75.75 0 0 1 6 1.25h2A4.75 4.75 0 0 1 12.75 6v2a.75.75 0 0 1-.75.75h-2A4.75 4.75 0 0 1 5.25 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 5a.75.75 0 0 0-.75-.75h-1.667a4.083 4.083 0 0 0-4.083 4.083V10c0 .414.336.75.75.75h1.667a4.083 4.083 0 0 0 4.083-4.083z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BioEnergy;
