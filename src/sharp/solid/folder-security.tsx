import React from "react";
const FolderSecurity: React.FC<
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
        d="M22.75 16.406v-2.968c-2.429 0-4.25-1.188-4.25-1.188s-1.821 1.188-4.25 1.188v2.968c0 4.157 4.25 5.344 4.25 5.344s4.25-1.187 4.25-5.344"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h14.527C14.504 20.772 13 18.981 13 16.406v-4.218h1.25a7.2 7.2 0 0 0 2.58-.508c.533-.181 1.336-.69 1.67-.922.315.226 1.09.728 1.67.922a7.2 7.2 0 0 0 2.58.508V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderSecurity;
