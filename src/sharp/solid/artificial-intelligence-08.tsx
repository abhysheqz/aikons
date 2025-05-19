import React from "react";
const ArtificialIntelligence_08: React.FC<
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
        d="M9.543 4.75h1.914l1.806 5.987 5.987 1.806v1.914l-5.987 1.806-1.806 5.987H9.543l-1.806-5.987-5.987-1.806v-1.914l5.987-1.806z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.318 1.75h1.364l.595 1.973 1.973.595v1.364l-1.973.595-.595 1.973h-1.364l-.595-1.973-1.973-.595V4.318l1.973-.595z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_08;
