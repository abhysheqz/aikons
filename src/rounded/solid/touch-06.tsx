import React from "react";
const Touch_06: React.FC<
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
        d="M5.55 9.801c-.228.207-.441.404-.582.547-.712.718-1.418 1.61-1.641 2.673-.066.316-.09.64-.07.962.034.563.233 1.066.53 1.59.284.506.693 1.089 1.195 1.805l2.117 2.575c.183.222.28.494.28.772 0 .2 0 .461.04.65a1.75 1.75 0 0 0 1.335 1.334c.189.041.397.041.597.04h7.557c.942 0 1.706-.763 1.706-1.704 0-.374.2-.783.58-1.183a5.7 5.7 0 0 0 1.208-1.933c.187-.502.27-1.039.309-1.679.039-.628.039-1.404.039-2.39v-1.668c0-.857-.363-1.527-.913-1.992a3.4 3.4 0 0 0-1.09-.6c-.293-.1-.44-.15-.565-.06s-.125.26-.125.598V12a.425.425 0 0 1-.43.419.425.425 0 0 1-.43-.42V9.68c0-.094 0-.14-.017-.188a.5.5 0 0 0-.09-.143c-.43-.554-1.07-.923-1.988-1.033-.265-.031-.397-.047-.498.042-.1.09-.1.235-.1.524v2.002a.425.425 0 0 1-.431.419.425.425 0 0 1-.43-.419V8.24c0-.136 0-.204-.033-.268-.032-.064-.08-.099-.176-.17a2.8 2.8 0 0 0-1.077-.486 1.9 1.9 0 0 0-.897.032l-.09.028c-.202.064-.304.095-.362.175s-.058.185-.058.398v2.934a.425.425 0 0 1-.43.419.425.425 0 0 1-.431-.419V2.596a1.346 1.346 0 1 0-2.693 0v11.08a.425.425 0 0 1-.43.418.425.425 0 0 1-.43-.419v-3.43c0-.569 0-.854-.18-.933-.177-.079-.387.11-.806.489"
      />
    </svg>
  );
};
export default Touch_06;
