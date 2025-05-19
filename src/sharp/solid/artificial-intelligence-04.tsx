import React from "react";
const ArtificialIntelligence_04: React.FC<
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
        d="M20.25 3.75H3.75v16.5h16.5zm-8.71 4.5H9.459L7.05 15.474l1.423.475.733-2.199h2.585l.733 2.199 1.423-.475zM10.5 9.872l.792 2.378H9.707zm6.25 5.878v-7.5h-1.5v7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 4.5V2h1.5v2.5zm4 0V2h1.5v2.5zm4 0V2h1.5v2.5zM2 7.25h2.5v1.5H2zm17.5 0H22v1.5h-2.5zm-17.5 4h2.5v1.5H2zm17.5 0H22v1.5h-2.5zm-17.5 4h2.5v1.5H2zm17.5 0H22v1.5h-2.5zM7.25 22v-2.5h1.5V22zm4 0v-2.5h1.5V22zm4 0v-2.5h1.5V22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_04;
