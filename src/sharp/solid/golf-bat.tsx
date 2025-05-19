import React from "react";
const GolfBat: React.FC<
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
        d="M19.753 1.873c-1.209-.425-2.463.294-2.818 1.494l-2.541 7.55.73.29-3.398 8.322a20 20 0 0 0-1.039-1.486c-.6-.777-1.327-1.584-2.14-2.201-.805-.613-1.761-1.09-2.806-1.09-1.338-.007-2.203.884-2.626 1.858-.415.957-.482 2.136-.165 3.068.333.98.96 1.644 1.739 2.049.758.393 1.627.524 2.458.524h5.637l4.2-10.308.683.27L20.998 5.1c.614-1.215.067-2.765-1.245-3.227"
      />
    </svg>
  );
};
export default GolfBat;
