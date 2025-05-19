import React from "react";
const MapsSquare_02: React.FC<
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
        d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15q-.471-.002-.9-.137c-.197-.062-.24-.309-.094-.455l7.019-7.019a.3.3 0 0 1 .424 0l5.61 5.611H19.5a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v2.94l5.61 5.61a.3.3 0 0 1 0 .425l-7.018 7.019c-.146.146-.393.103-.455-.095A3 3 0 0 1 1.5 19.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 5.25c-2.374 0-4.25 1.991-4.25 4.386 0 1.31.576 2.28 1.243 3.074.309.366.65.71.966 1.03l.062.063c.342.345.656.666.927 1.002.527.652 1.565.676 2.112.02.276-.33.588-.648.926-.994l.017-.017c.337-.344.699-.715 1.024-1.112.659-.803 1.223-1.78 1.223-3.066 0-2.395-1.876-4.386-4.25-4.386m0 2.75a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsSquare_02;
