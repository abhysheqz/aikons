import React from "react";
const Webflow: React.FC<
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
        d="M6.416 11.5H1.5v-6h6v4.583L10 5.5h4.5l-.444 4.889L16.5 5.5h6l-6.5 13h-6l2.832-5.665A14.17 14.17 0 0 1 1.5 18.5v-5c2.081-.416 3.816-1.18 4.916-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Webflow;
