import React from "react";
const DeletePutBack: React.FC<
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
        d="M8.58 1.856a1 1 0 0 1 .92-.606h5a1 1 0 0 1 .92.606l1.24 2.894H22v2H2v-2h5.34zm.937 2.894h4.967l-.643-1.5h-3.682z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.956 4.986a.75.75 0 0 1 .546-.236h15a.75.75 0 0 1 .749.795l-.768 12.673a4.5 4.5 0 0 0-4.233-2.968h-2.44l1.22-1.22-1.06-1.06L9.94 16l3.03 3.03 1.06-1.06-1.22-1.22h2.44a3 3 0 1 1 0 6H5.502a.75.75 0 0 1-.749-.705l-1-16.5a.75.75 0 0 1 .203-.559"
      />
    </svg>
  );
};
export default DeletePutBack;
