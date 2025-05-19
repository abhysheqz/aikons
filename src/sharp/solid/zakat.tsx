import React from "react";
const Zakat: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.751 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .361.093l2.332 1.282H11c1.238 0 2.264.633 2.815 1.48L10.5 17.708l-2.763-.92-.474 1.422 3 1c.154.052.32.052.474 0l4.56-2.231v-1.37l2.176-.725a2.75 2.75 0 0 1 3.423 1.587l.3.75a.75.75 0 0 1-.361.949l-9 4.5a.75.75 0 0 1-.54.05l-7-1.98a.75.75 0 0 1-.545-.721z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.502 1.25a.75.75 0 0 0-.67 1.085l1.253 2.508a17.6 17.6 0 0 0-1.65 1.886c-.724.966-1.428 2.162-1.64 3.389-.187 1.078.251 2.016.966 2.653.702.625 1.682.98 2.69.98h4.102c1.009 0 1.988-.355 2.69-.98.715-.637 1.153-1.575.966-2.653-.212-1.227-.916-2.423-1.639-3.389a17.6 17.6 0 0 0-1.65-1.886l1.253-2.508a.75.75 0 0 0-.67-1.085zm4.788 1.5-.75 1.5h-2.073l-.75-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zakat;
