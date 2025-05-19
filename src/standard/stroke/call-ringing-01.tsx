import React from "react";
const CallRinging_01: React.FC<
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
        d="M16.546 12.838v5.343L22 20v-2.79c0-.508-.19-1.002-.556-1.353-5.363-5.143-13.524-5.143-18.888 0A1.86 1.86 0 0 0 2 17.21V20l5.455-1.79v-5.372M12 3v3m6 0-2 2M6 6l2 2"
      />
    </svg>
  );
};
export default CallRinging_01;
