import React from "react";
const Edit_02: React.FC<
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
        d="M12 21a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m18.503 11.443 1.916-1.916a1.98 1.98 0 0 0 0-2.803L17.276 3.58a1.98 1.98 0 0 0-2.803 0l-1.916 1.915zM17.443 12.503l-5.947-5.946-8.915 8.916c-.372.372-.581.876-.581 1.402v4.134c0 .547.444.991.991.991h4.134c.525 0 1.03-.209 1.401-.58z"
      />
    </svg>
  );
};
export default Edit_02;
