import React from "react";
const HighHeels_02: React.FC<
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
        d="M2 3a1 1 0 0 0-1 1v7.951q0 .096.017.188h-.005l1.5 8a.75.75 0 0 0 .737.611h1.5a.75.75 0 0 0 .725-.556l1.807-6.779q.053.027.103.055c.637.36 1.182.966 1.822 1.804q.197.258.408.544c.51.687 1.09 1.467 1.77 2.166l.034.032c3.09 2.895 6.379 2.933 9.596 2.97q.485.004.966.014a1 1 0 1 0 .04-2l-.935-.015-.334-.005v-1.862a1.75 1.75 0 0 0-.968-1.565l-2.447-1.224a.75.75 0 0 0-.785.071l-3.358 2.518a10 10 0 0 1-.392-.346c-.57-.59-1.04-1.22-1.533-1.882q-.23-.31-.472-.63c-.652-.854-1.407-1.756-2.43-2.332-.91-.512-1.91-.66-2.922-.705a32 32 0 0 0-1.603-.018h-.156q-.336.004-.685.004V8h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HighHeels_02;
