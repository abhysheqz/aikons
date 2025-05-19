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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17.5 17-.473-1.984-3.527-1.017v-1.467c.896-.605 1.5-1.736 1.5-3.032C15 7.567 13.656 6 12 6c-1.657 0-3 1.567-3 3.5 0 1.296.603 2.427 1.5 3.032v1.467l-3.473 1.017L6.5 17M8.5 2.5h-6v6m6 13h-6v-6m13-13h6v6m-6 13h6v-6"
      />
    </svg>
  );
};
export default FaceId;
