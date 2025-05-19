import React from "react";
const Mouse_18: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7V2m0 11v-2M13.5 7h-3v4h3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.873 4.931c-2.617-.56-5.144-1.667-5.863-2.952a.01.01 0 0 0-.017 0c-.639 1.144-3.297 2.416-5.927 2.99-1.963 4.372-1.918 7.61-.76 11.17.696 1.6 1.532 3.028 3.714 4.51 1.688 1.032 2.972 1.314 2.972 1.314s1.429-.31 3.145-1.394c1.449-1.072 2.93-2.695 3.674-4.842 1.387-3.999.476-7.686-.938-10.796Z"
      />
    </svg>
  );
};
export default Mouse_18;
