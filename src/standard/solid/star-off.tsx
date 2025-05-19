import React from "react";
const StarOff: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.682 7.681-4.443.701c-1.422.224-1.99 1.95-.972 2.961l3.434 3.41a.25.25 0 0 1 .07.215l-.756 4.758c-.225 1.41 1.26 2.478 2.545 1.83l4.326-2.183a.26.26 0 0 1 .229 0l4.326 2.183c1.284.648 2.769-.42 2.544-1.83l-.14-.88zM18.294 14.758l.005-.005 3.434-3.41c1.017-1.01.45-2.737-.972-2.96l-4.797-.757a.25.25 0 0 1-.185-.134l-2.206-4.288c-.655-1.272-2.49-1.272-3.146 0L9.175 5.64z"
      />
    </svg>
  );
};
export default StarOff;
