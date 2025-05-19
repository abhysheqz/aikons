import React from "react";
const SolarPanel_04: React.FC<
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
        d="M12.998 20v1h1a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2h1v-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.08 1.186a1 1 0 0 1 .232 1.395L11.942 4.5h2.056a1 1 0 0 1 .814 1.581l-2.5 3.5a1 1 0 0 1-1.627-1.162l1.37-1.919H9.998a1 1 0 0 1-.813-1.581l2.5-3.5a1 1 0 0 1 1.395-.233"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.208 8H6.281a2 2 0 0 0-1.94 1.515L3.468 13H11v-1.55A2.5 2.5 0 0 1 9.208 8M13 11v2h7.53l-.87-3.485A2 2 0 0 0 17.72 8h-2.434l-1.752 2.453a2.5 2.5 0 0 1-.534.548M2.34 17.515 2.97 15H11v5H4.28a2 2 0 0 1-1.94-2.485M13 20h6.72a2 2 0 0 0 1.94-2.485L21.03 15H13z"
      />
    </svg>
  );
};
export default SolarPanel_04;
