import React from "react";
const Leaf_02: React.FC<
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
        d="m21.657 2.991-.001-.006v-.003a.75.75 0 0 0-.637-.637l-.004-.001a9 9 0 0 0-.368-.04c-.23-.02-.558-.041-.968-.05a18.7 18.7 0 0 0-3.281.226c-2.634.415-5.999 1.53-8.81 4.342-2.217 2.216-3.228 4.336-3.33 6.267-.086 1.652.497 3.071 1.404 4.188L16.47 6.47a.75.75 0 1 1 1.06 1.06L6.753 18.308c1.111.726 2.74 1.027 4.397.885 2.021-.173 4.26-1.013 6.028-2.78 2.812-2.812 3.927-6.177 4.342-8.81.209-1.32.244-2.464.226-3.282a15 15 0 0 0-.077-1.235l-.01-.074z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.662 17.277 2.47 20.47a.75.75 0 1 0 1.06 1.06l3.223-3.222a3.7 3.7 0 0 1-.588-.473 7 7 0 0 1-.503-.558"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leaf_02;
