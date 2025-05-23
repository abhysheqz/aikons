import React from "react";
const StructureFolderCircle: React.FC<
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
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.355 12.772C6.256 12.115 7.53 12 8.988 12h6.024c1.457 0 2.732.115 3.633.772.99.722 1.27 1.877 1.353 3.164a1 1 0 0 1-1.996.128c-.074-1.165-.308-1.51-.535-1.676-.314-.229-.955-.388-2.455-.388H8.988c-1.5 0-2.14.16-2.455.388-.227.166-.46.51-.535 1.676a1 1 0 0 1-1.996-.128c.082-1.287.364-2.442 1.353-3.164"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 1.382c.788.292 1.133.988 1.338 1.402.037.081.15.244.305.244h1.53c.444 0 .831 0 1.149.032.337.034.678.11.991.317.23.15.427.346.58.573.212.313.29.653.325.989.032.315.032.774.032 1.212 0 .746 0 1.364-.051 1.863-.054.52-.17.994-.457 1.419-.22.324-.501.603-.829.819-.427.281-.903.395-1.427.447-.504.051-1.128.051-1.885.051h-.653c-1.017 0-1.853 0-2.516-.088-.694-.092-1.308-.293-1.8-.78-.494-.487-.699-1.097-.793-1.787-.09-.656-.089-1.484-.089-2.486V4.198c0-.378 0-.74.024-1.013.026-.291.084-.588.244-.87.191-.338.473-.616.812-.803.283-.156.58-.212.872-.238.275-.024.734-.024 1.117-.024.429 0 .822-.001 1.181.132"
      />
    </svg>
  );
};
export default StructureFolderCircle;
