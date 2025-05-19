import React from "react";
const CheckmarkBadge_03: React.FC<
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
        d="M17.423 4.247h-2.111l-2.775-2.774a.76.76 0 0 0-1.074 0L8.688 4.247h-3.68a.76.76 0 0 0-.76.76v3.681l-2.775 2.775a.76.76 0 0 0 0 1.074l2.774 2.775v3.68c0 .42.34.76.76.76h3.681l2.775 2.775a.76.76 0 0 0 1.074 0l2.775-2.774h3.68c.42 0 .76-.34.76-.76v-3.681l2.775-2.775a.76.76 0 0 0 0-1.074l-2.774-2.775v-3.68a.8.8 0 0 0-.037-.234q-.32.302-.641.637c-1.118 1.166-2.18 2.555-3.103 3.904a52 52 0 0 0-2.235 3.586c-.271.476-.7 1.28-.844 1.55l-1.083 2.14-.759-2.274c-.406-1.22-1.218-1.977-1.957-2.44a6.2 6.2 0 0 0-1.323-.596l-.97-.223.45-1.95.974.226c.581.133 1.426.531 1.93.848a6.8 6.8 0 0 1 1.86 1.702 54 54 0 0 1 2.307-3.698c.904-1.321 1.96-2.717 3.1-3.939"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkBadge_03;
