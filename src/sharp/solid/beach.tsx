import React from "react";
const Beach: React.FC<
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
        d="M22 17.508h.75V22H1.25v-6.487s1.438-.508 1.887-.607c.898-.198 2.202-.392 3.863-.392 2.505 0 4.766.715 6.998 1.42l.353.112c2.372.748 4.775 1.462 7.649 1.462M20.726 7.613c-.968-3.764-4.5-5.171-7.511-4.753L12.957 2l-1.916.574.25.833c-1.207.53-2.266 1.386-3 2.535-.927 1.451-1.302 3.32-.86 5.478l.163.798 5.831-1.71 1.22 4.058.157.05c.722.227 1.43.445 2.138.639l-1.596-5.31 5.562-1.631z"
      />
    </svg>
  );
};
export default Beach;
