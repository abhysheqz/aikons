import React from "react";
const FileSecurity: React.FC<
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
        d="M20.75 17.406v-2.968c-2.428 0-4.25-1.188-4.25-1.188s-1.821 1.188-4.25 1.188v2.968c0 4.157 4.25 5.344 4.25 5.344s4.25-1.187 4.25-5.344"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.252 1.25-.002 21.5h10.527l-.163-.122C12.34 21.65 11 19.98 11 17.406v-4.218h1.25a7.2 7.2 0 0 0 2.58-.508c.328-.128 1.155-.543 1.67-.922.662.469 1.342.794 1.67.922.66.258 1.565.508 2.58.508V8.628L13.361 1.25zm9.31 1.955L18.8 9.46h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileSecurity;
