import React from "react";
const MusicNote_04: React.FC<
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
        d="M12 2a1 1 0 0 0-1 1v10.075a4.85 4.85 0 1 0 2 3.837v-6.476c1.151-.983 2.43-1.142 3.586-.95 1.31.219 2.366.88 2.707 1.221a1 1 0 0 0 1.697-.848c-.444-3.107-2.038-5.101-3.868-6.296C15.327 2.39 13.33 2 12 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNote_04;
