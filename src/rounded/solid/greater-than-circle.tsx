import React from "react";
const GreaterThanCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1.328 6.01A1 1 0 0 0 9.328 8.74l3.333 3.02c.109.1.188.177.246.239-.058.062-.137.14-.246.239l-3.333 3.02a1 1 0 1 0 1.344 1.482l3.332-3.02c.238-.216.471-.449.647-.7.183-.26.349-.602.349-1.021 0-.42-.166-.762-.349-1.021a4.4 4.4 0 0 0-.647-.7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GreaterThanCircle;
