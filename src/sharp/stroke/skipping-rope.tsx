import React from "react";
const SkippingRope: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.498 5.941c0 1.933 1.791 3.5 4 3.5s4-1.567 4-3.5-1.79-3.5-4-3.5-4 1.567-4 3.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.27 7.934c-.178.607-.345 1.525-.276 3.933M6.458 5.483c1.956-2.365 3.887-3.038 6.514-3.038 2.323.24 4.12 1.196 5.51 3.019 1.243 1.628 1.641 3.233 1.48 6.289m-16.833.663H6.89a.1.1 0 0 1 .097.125l-.493 1.876a.1.1 0 0 0-.003.034l.483 5.173c.047.506.017 1.024-.183 1.491-.272.634-.578.94-.983 1.131-.494.232-1.088.248-1.573-.004-.386-.2-.67-.51-.927-.987-.295-.548-.348-1.188-.283-1.807l.52-4.996a.1.1 0 0 0-.002-.036l-.51-1.874a.1.1 0 0 1 .096-.126Zm14.936.02h3.832a.1.1 0 0 1 .096.127l-.536 1.836a.1.1 0 0 0-.004.039l.524 5.19c.052.516.024 1.046-.182 1.52-.27.625-.575.929-.977 1.118-.494.232-1.088.248-1.572-.004-.39-.203-.676-.516-.935-1.001-.289-.54-.344-1.169-.285-1.778l.483-4.994a.1.1 0 0 0-.003-.038l-.537-1.889a.1.1 0 0 1 .096-.127Z"
      />
    </svg>
  );
};
export default SkippingRope;
