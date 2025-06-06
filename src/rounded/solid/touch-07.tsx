import React from "react";
const Touch_07: React.FC<
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
        d="m3.063 14.75 3.33 4.682c.65.887 1.045 1.428 1.53 1.855a5.84 5.84 0 0 0 2.58 1.322c.627.141 1.412.141 2.492.141 1.093 0 1.95 0 2.644-.045.706-.046 1.294-.142 1.84-.357a5.95 5.95 0 0 0 3.382-3.462c.208-.554.3-1.151.345-1.871.044-.71.044-1.587.044-2.709v-2.628c0-1.2-.848-2.437-2.112-2.744-.25-.06-.374-.09-.489.002-.115.093-.112.241-.106.539l.042 1.937a.423.423 0 0 1-.427.419.423.423 0 0 1-.427-.419V9.05c0-.089 0-.133-.014-.177-.014-.045-.037-.077-.082-.141-.418-.59-1.006-.995-1.97-1.11-.265-.03-.398-.047-.498.043-.101.09-.101.234-.101.524v2.048a.423.423 0 0 1-.427.42.423.423 0 0 1-.427-.42V7.568c0-.128 0-.192-.029-.253-.029-.06-.072-.096-.158-.167a2.8 2.8 0 0 0-1.107-.555c-.216-.053-.6-.06-.921-.037-.193.014-.29.02-.37.107s-.08.195-.08.412v3.161a.423.423 0 0 1-.427.42.423.423 0 0 1-.427-.42V2.584a1.333 1.333 0 1 0-2.665 0v11.724c0 .17-.105.324-.266.388a.43.43 0 0 1-.467-.095l-1.9-1.912a1.54 1.54 0 0 0-2.302.13 1.6 1.6 0 0 0-.341.9c.01.253.058.506.143.75q.068.147.168.281"
      />
    </svg>
  );
};
export default Touch_07;
