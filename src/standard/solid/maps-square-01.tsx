import React from "react";
const MapsSquare_01: React.FC<
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
        d="M14.5 5.25c-2.367 0-4.25 1.968-4.25 4.35 0 1.364.673 2.455 1.404 3.239.733.785 1.58 1.324 2.073 1.603a1.57 1.57 0 0 0 1.546 0c.493-.279 1.34-.818 2.073-1.603.73-.784 1.404-1.876 1.404-3.239 0-2.382-1.883-4.35-4.25-4.35m0 2.75a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15q-.471-.002-.9-.137c-.197-.062-.24-.309-.094-.455l7.019-7.019a.3.3 0 0 1 .424 0l5.61 5.611H19.5a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v2.94l5.61 5.61a.3.3 0 0 1 0 .425l-7.018 7.019c-.146.146-.393.103-.455-.095A3 3 0 0 1 1.5 19.5z"
      />
    </svg>
  );
};
export default MapsSquare_01;
