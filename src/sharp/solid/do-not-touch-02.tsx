import React from "react";
const DoNotTouch_02: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM10.52 2.538c0-.7.595-1.288 1.356-1.288.76 0 1.357.588 1.357 1.288v7.16h.794v-4.92c0-.7.596-1.288 1.357-1.288.76 0 1.356.588 1.356 1.289v5.04h.795v-2.8c0-.7.596-1.288 1.357-1.288.76 0 1.356.588 1.356 1.288v9.696l-7.016-7.016-2.713-2.714zM9.725 4.779c0-.7-.597-1.289-1.357-1.289-.38 0-.719.147-.963.381l2.32 2.32z"
      />
      <path
        fill="currentColor"
        d="M4.441 12.158c-.665-.64-1.765-.58-2.35.125a1.45 1.45 0 0 0-.03 1.833l.004.006 5.728 7.628h8.313a4.15 4.15 0 0 0 3.592-2.05L7.01 7.012v7.615z"
      />
    </svg>
  );
};
export default DoNotTouch_02;
