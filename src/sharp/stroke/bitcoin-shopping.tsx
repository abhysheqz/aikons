import React from "react";
const BitcoinShopping: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.422 17.647V12.32m1.56 0v-1.332m0 7.99v-1.331m-1.56-2.664h3.118m0 0c.517 0 .936.447.936 1v.665c0 .552-.419.999-.936.999H9.487m4.054-2.664c.517 0 .936-.447.936-.998v-.666c0-.552-.419-1-.936-1H9.487"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.47 7.493A5.49 5.49 0 0 0 11.981 2a5.49 5.49 0 0 0-5.489 5.493"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2.483 8.07 2.519 13.934h13.957L21.481 8.07a.1.1 0 0 0-.098-.118H2.581a.1.1 0 0 0-.098.118Z"
      />
    </svg>
  );
};
export default BitcoinShopping;
