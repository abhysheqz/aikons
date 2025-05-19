import React from "react";
const PlayStore: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm7.656 9.178L7.411 5.85c.43-.155.925-.144 1.386.093.823.424 2.054 1.03 3.393 1.691l2.09 1.033zm-1.029 1.095L6.349 6.912q-.097.273-.099.587v9.002q.002.322.105.602zm4.554-2.656-2.498 2.66 2.45 2.62c.814-.41 1.572-.799 2.201-1.133a1.717 1.717 0 0 0 0-3.041c-.616-.327-1.356-.706-2.153-1.106m-3.528 3.755 2.081 2.226-2.088 1.035c-1.32.654-2.533 1.254-3.349 1.674a1.72 1.72 0 0 1-1.373.098z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayStore;
