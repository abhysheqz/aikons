import React from "react";
const PointingRight_08: React.FC<
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
        d="M9.496 5.311a2.7 2.7 0 0 0-.744-.056c-.776.05-1.535.487-3.212 1.694l-.012.008L1.25 9.791v9.817c0 1.747 1.333 3.142 2.952 3.142h7.24c.708 0 1.282-.589 1.282-1.315v-1.433l-2.055.007v-.801h1.888q.226 0 .427-.075c.498-.18.854-.668.854-1.24V16.46l-2.395.007v-.801h2.228q.226-.002.427-.075c.498-.18.854-.668.854-1.24v-1.427H12v-.8h9.469c.696 0 1.28-.602 1.28-1.37 0-.77-.584-1.372-1.28-1.372H9.215v-.8h4.146L10.675 5.94c-.46-.362-.814-.55-1.179-.629"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.543 1.25 3.207 3.207-3.207 3.207-1.414-1.414.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_08;
