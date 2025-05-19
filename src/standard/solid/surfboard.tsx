import React from "react";
const Surfboard: React.FC<
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
        d="M9.347 5.789C12.88 2.252 18.359 1 22 1a1 1 0 0 1 1 1c0 3.645-1.267 9.113-4.8 12.648-3.07 3.072-8.408 6.296-11.437 8.066a1.2 1.2 0 0 1-1.792-.865l-.354-2.465-2.465-.352a1.2 1.2 0 0 1-.867-1.792c1.769-3.03 4.99-8.379 8.06-11.451m11.618-2.754c-3.25.217-7.478 1.44-10.204 4.168-.899.9-1.822 2.023-2.721 3.237 2.083-.618 3.992-.418 5.653-.245q.289.03.569.058c1.28.125 2.34.168 3.308-.153.731-.242 1.463-.71 2.194-1.632a19 19 0 0 0 1.201-5.433M9.03 16.03a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Surfboard;
