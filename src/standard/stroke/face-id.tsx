import React from "react";
const FaceId: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 17-.202-.849a2 2 0 0 0-1.392-1.458l-2.406-.694v-1.467c.896-.605 1.5-1.736 1.5-3.032C15 7.567 13.656 6 12 6c-1.657 0-3 1.567-3 3.5 0 1.296.603 2.427 1.5 3.032v1.467l-2.391.7a2 2 0 0 0-1.371 1.406L6.5 17M15 2.5h4.5a2 2 0 0 1 2 2V9M9 2.5H4.5a2 2 0 0 0-2 2V9M9 21.5H4.5a2 2 0 0 1-2-2V15M15 21.5h4.5a2 2 0 0 0 2-2V15"
      />
    </svg>
  );
};
export default FaceId;
