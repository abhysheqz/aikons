import React from "react";
const PresentationPodium: React.FC<
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
        d="M7.174 1.25h1.93v1.88H7.929l-.783 3.05-1.874-.456.966-3.762a.96.96 0 0 1 .937-.712m8.901 1.88h-1.177V1.25h1.931c.443 0 .83.294.937.712l.966 3.762-1.874.456z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.423 5.521A.75.75 0 0 1 4 5.25h16a.75.75 0 0 1 .737.888l-1.5 8a.75.75 0 0 1-.737.612h-3.317l-.456 6H16v2H8v-2h1.167l-.39-6H5.5a.75.75 0 0 1-.737-.612l-1.5-8a.75.75 0 0 1 .16-.617"
      />
    </svg>
  );
};
export default PresentationPodium;
