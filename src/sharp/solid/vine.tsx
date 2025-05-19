import React from "react";
const Vine: React.FC<
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
        d="M10.996 17.5C7.649 13.698 6.212 7.993 6.549 4.518l-3.51-.102C2.709 9 4.494 17.5 10.505 22c4.181-2.31 6.633-5.745 7.572-7.444h2.924v-3.054c-2.937-.019-6.864-.082-7.325-3.354-.505-3.586 3.535-3.074 3.03.05l3.03.975C20.746 6.1 18.726 2 15.696 2c-4.04 0-5.555 2.952-5.555 5.124 0 5.636 4.545 6.66 4.545 6.66-.738 1.872-3.69 3.716-3.69 3.716"
      />
    </svg>
  );
};
export default Vine;
