import React from "react";
const EaseOutControlPoint: React.FC<
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
        d="m5.416 21.75-.916-.401-.916-.402.002-.004.005-.01.017-.04.065-.142a41 41 0 0 1 1.217-2.385c.846-1.532 2.093-3.879 3.697-5.932 3.164-4.05 7.924-8.385 13.913-8.385v2c-5.01 0-9.251 3.666-12.337 7.616-1.52 1.947-2.711 4.199-3.522 5.667a39 39 0 0 0-.92 1.767c-.103.212-.305.651-.305.651M7.33 6.25a3.001 3.001 0 1 1 0-2H9.5v2zM11.5 4.25h2v2h-2z"
      />
    </svg>
  );
};
export default EaseOutControlPoint;
