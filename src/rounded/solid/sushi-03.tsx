import React from "react";
const Sushi_03: React.FC<
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
        d="M10.5 9.625a1 1 0 0 1-1 1h-.009a1 1 0 1 1 0-2H9.5a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 16.278V9.625c0-1.086.784-1.912 1.704-2.423.945-.526 2.2-.827 3.546-.827s2.6.301 3.546.827c.92.51 1.704 1.337 1.704 2.423v2.978zm.556 1.925c.313.37.728.67 1.165.898.941.492 2.19.774 3.529.774s2.588-.282 3.53-.774c.905-.474 1.72-1.26 1.72-2.329v-2.05zm7.512-9.69c.708.394.932.818.932 1.112s-.224.718-.932 1.112c-.684.38-1.678.638-2.818.638-.997 0-1.884-.198-2.547-.502a4 4 0 0 1-.27-.136c-.71-.394-.933-.818-.933-1.112s.224-.718.932-1.112c.684-.38 1.678-.638 2.818-.638s2.134.258 2.818.638M4.25 16.278l-2.58.903a1 1 0 0 0 .66 1.888l2.476-.866c-.337-.398-.556-.876-.556-1.43zm10.5-1.556v-2.119l6.92-2.422a1 1 0 1 1 .66 1.888z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.912 4.715a1 1 0 0 1-.501 1.322l-8 3.6a1 1 0 0 1-.821-1.824l8-3.6a1 1 0 0 1 1.322.502m-17 7.65a1 1 0 0 1-.501 1.322l-3 1.35a1 1 0 0 1-.821-1.824l3-1.35a1 1 0 0 1 1.322.502"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sushi_03;
