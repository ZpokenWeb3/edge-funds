import { LucideIcon, LucideProps, MoveRight, X } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  github: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3C4.477 3 0 7.484 0 13.017C0 17.442 2.865 21.197 6.839 22.521C7.339 22.613 7.521 22.304 7.521 22.038C7.521 21.801 7.513 21.17 7.508 20.335C4.726 20.94 4.139 18.992 4.139 18.992C3.685 17.834 3.029 17.526 3.029 17.526C2.121 16.906 3.098 16.918 3.098 16.918C4.101 16.988 4.629 17.95 4.629 17.95C5.521 19.48 6.97 19.038 7.539 18.782C7.631 18.135 7.889 17.694 8.175 17.444C5.955 17.191 3.62 16.331 3.62 12.493C3.62 11.4 4.01 10.505 4.649 9.805C4.546 9.552 4.203 8.533 4.747 7.155C4.747 7.155 5.587 6.885 7.497 8.181C8.31277 7.95851 9.15444 7.84519 10 7.844C10.85 7.848 11.705 7.959 12.504 8.181C14.413 6.885 15.251 7.154 15.251 7.154C15.797 8.533 15.453 9.552 15.351 9.805C15.991 10.505 16.379 11.4 16.379 12.493C16.379 16.341 14.04 17.188 11.813 17.436C12.172 17.745 12.491 18.356 12.491 19.291C12.491 20.629 12.479 21.71 12.479 22.038C12.479 22.306 12.659 22.618 13.167 22.52C15.1583 21.8521 16.8893 20.5753 18.1155 18.87C19.3416 17.1648 20.0009 15.1173 20 13.017C20 7.484 15.522 3 10 3Z"
        fill="#FAFAFA"
        fillOpacity="0.5"
      />
    </svg>
  ),
  discord: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.3169 4.49285C18.7869 3.8029 17.147 3.29293 15.432 3.00295C15.4168 3.00002 15.401 3.00191 15.3868 3.00836C15.3726 3.01481 15.3608 3.0255 15.353 3.03895C15.143 3.40792 14.909 3.88889 14.7451 4.26887C12.9262 3.99712 11.0771 3.99712 9.25821 4.26887C9.07555 3.84776 8.86957 3.43715 8.64123 3.03895C8.63349 3.02533 8.62178 3.0144 8.60767 3.00761C8.59355 3.00082 8.5777 2.9985 8.56223 3.00095C6.84828 3.29093 5.20833 3.8009 3.67737 4.49185C3.6642 4.49738 3.65304 4.5068 3.64538 4.51885C0.533465 9.09355 -0.31951 13.5553 0.0994778 17.961C0.100644 17.9718 0.103993 17.9822 0.109322 17.9917C0.114652 18.0011 0.121849 18.0094 0.130477 18.016C1.94682 19.3383 3.9727 20.3456 6.1233 20.9958C6.1383 21.0004 6.15433 21.0004 6.16932 20.9957C6.1843 20.9911 6.19754 20.982 6.2073 20.9698C6.67008 20.3509 7.08017 19.6943 7.43327 19.0069C7.43817 18.9975 7.44099 18.9872 7.44155 18.9766C7.4421 18.966 7.44038 18.9554 7.43649 18.9455C7.43261 18.9357 7.42665 18.9268 7.41901 18.9194C7.41138 18.9121 7.40226 18.9064 7.39227 18.9029C6.74629 18.6596 6.12039 18.3661 5.52032 18.025C5.50954 18.0188 5.50045 18.0101 5.49388 17.9995C5.4873 17.989 5.48345 17.977 5.48266 17.9646C5.48186 17.9522 5.48416 17.9398 5.48934 17.9286C5.49451 17.9173 5.50241 17.9074 5.51232 17.9C5.63832 17.807 5.76431 17.71 5.88431 17.613C5.89511 17.6043 5.90812 17.5987 5.92189 17.5969C5.93566 17.5952 5.94966 17.5973 5.96231 17.603C9.88919 19.3669 14.1421 19.3669 18.023 17.603C18.0356 17.5969 18.0498 17.5946 18.0637 17.5962C18.0777 17.5978 18.091 17.6032 18.102 17.612C18.222 17.71 18.347 17.807 18.4739 17.9C18.484 17.9073 18.492 17.917 18.4973 17.9282C18.5027 17.9394 18.5052 17.9517 18.5046 17.9641C18.504 17.9765 18.5003 17.9885 18.4939 17.9991C18.4875 18.0098 18.4786 18.0186 18.4679 18.025C17.87 18.3689 17.248 18.6599 16.595 18.9019C16.585 18.9055 16.5758 18.9113 16.5682 18.9187C16.5606 18.9262 16.5546 18.9352 16.5507 18.9451C16.5469 18.9551 16.5451 18.9657 16.5457 18.9764C16.5463 18.987 16.5491 18.9974 16.554 19.0069C16.914 19.6939 17.326 20.3478 17.779 20.9688C17.7884 20.9815 17.8015 20.991 17.8165 20.996C17.8316 21.0011 17.8478 21.0013 17.863 20.9968C20.0173 20.3484 22.0464 19.3407 23.8648 18.016C23.8737 18.0098 23.8811 18.0017 23.8866 17.9924C23.8921 17.9831 23.8956 17.9727 23.8968 17.962C24.3968 12.8683 23.0588 8.44259 20.3479 4.52085C20.3412 4.50811 20.3302 4.49817 20.3169 4.49285ZM8.02025 15.2781C6.83828 15.2781 5.86331 14.2092 5.86331 12.8983C5.86331 11.5864 6.81928 10.5185 8.02025 10.5185C9.23021 10.5185 10.1962 11.5954 10.1772 12.8983C10.1772 14.2102 9.22121 15.2781 8.02025 15.2781ZM15.995 15.2781C14.8121 15.2781 13.8381 14.2092 13.8381 12.8983C13.8381 11.5864 14.7931 10.5185 15.995 10.5185C17.205 10.5185 18.171 11.5954 18.152 12.8983C18.152 14.2102 17.206 15.2781 15.995 15.2781Z"
        fill="#FAFAFA"
        fillOpacity="0.5"
      />
    </svg>
  ),
  twitter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.1757 4H19.9357L13.9058 10.7782L21 20H15.4455L11.0955 14.4063L6.117 20H3.3555L9.8055 12.7497L3 4.00074H8.6955L12.6278 9.11354L17.1757 4ZM16.2075 18.3759H17.7367L7.8645 5.5393H6.2235L16.2075 18.3759Z"
        fill="#FAFAFA"
        fillOpacity="0.5"
      />
    </svg>
  ),
  MoveRight: MoveRight,
  plus: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect width="20" height="20" rx="10" fill="#FAFAFA" />
      <path
        d="M15 10C15 10.1591 14.9368 10.3117 14.8243 10.4243C14.7117 10.5368 14.5591 10.6 14.4 10.6H10.6V14.4C10.6 14.5591 10.5368 14.7117 10.4243 14.8243C10.3117 14.9368 10.1591 15 10 15C9.84087 15 9.68826 14.9368 9.57574 14.8243C9.46321 14.7117 9.4 14.5591 9.4 14.4V10.6H5.6C5.44087 10.6 5.28826 10.5368 5.17574 10.4243C5.06321 10.3117 5 10.1591 5 10C5 9.84087 5.06321 9.68826 5.17574 9.57574C5.28826 9.46321 5.44087 9.4 5.6 9.4H9.4V5.6C9.4 5.44087 9.46321 5.28826 9.57574 5.17574C9.68826 5.06321 9.84087 5 10 5C10.1591 5 10.3117 5.06321 10.4243 5.17574C10.5368 5.28826 10.6 5.44087 10.6 5.6V9.4H14.4C14.5591 9.4 14.7117 9.46321 14.8243 9.57574C14.9368 9.68826 15 9.84087 15 10Z"
        fill="#101012"
      />
    </svg>
  ),
  X: X,
  burger: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75ZM3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12ZM11.25 17.25C11.25 17.0511 11.329 16.8603 11.4697 16.7197C11.6103 16.579 11.8011 16.5 12 16.5H20.25C20.4489 16.5 20.6397 16.579 20.7803 16.7197C20.921 16.8603 21 17.0511 21 17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18H12C11.8011 18 11.6103 17.921 11.4697 17.7803C11.329 17.6397 11.25 17.4489 11.25 17.25Z"
        fill="#FAFAFA"
      />
    </svg>
  ),
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      viewBox="0 0 122 32"
      fill="none"
    >
      <path
        d="M39.0725 19.2402V11.4654H41.66V18.6058C41.66 19.1614 41.7968 19.6673 42.0705 20.1235C42.3442 20.5796 42.7091 20.9445 43.1652 21.2182C43.6213 21.4835 44.1231 21.6162 44.6704 21.6162C45.2261 21.6162 45.7278 21.4835 46.1756 21.2182C46.6317 20.9445 46.9925 20.5796 47.2579 20.1235C47.5316 19.6673 47.6684 19.1614 47.6684 18.6058V11.4654H50.2559L50.2683 23.9051H47.6808L47.6684 22.5617C47.2454 23.0758 46.7188 23.4822 46.0885 23.7808C45.4583 24.0793 44.7824 24.2286 44.0609 24.2286C43.1403 24.2286 42.3027 24.0047 41.548 23.5568C40.7933 23.109 40.1921 22.5077 39.7443 21.7531C39.2964 20.9984 39.0725 20.1608 39.0725 19.2402Z"
        fill="#FAFAFA"
      />
      <path
        d="M52.1139 23.9051V5.24548H54.7013V23.9051H52.1139Z"
        fill="#FAFAFA"
      />
      <path
        d="M63.4996 14.0528H60.8872L60.8748 23.9051H58.2873L58.2997 14.0528H56.3218V11.4654H58.2997L58.2873 7.55928H60.8748L60.8872 11.4654H63.4996V14.0528Z"
        fill="#FAFAFA"
      />
      <path
        d="M64.9803 23.9051V11.4654H67.5678V12.784C67.999 12.2698 68.5298 11.8634 69.16 11.5649C69.7903 11.2663 70.4704 11.1171 71.2002 11.1171C71.6646 11.1171 72.1249 11.1793 72.581 11.3037L71.5485 13.916C71.225 13.7916 70.9016 13.7294 70.5782 13.7294C70.0308 13.7294 69.5291 13.8662 69.073 14.1399C68.6168 14.4053 68.2519 14.7661 67.9783 15.2222C67.7046 15.6783 67.5678 16.1842 67.5678 16.7398V23.9051H64.9803Z"
        fill="#FAFAFA"
      />
      <path
        d="M82.3672 11.4654H84.9547V23.9051H82.3548L82.2552 22.1014C81.8903 22.74 81.3969 23.2541 80.7749 23.6439C80.1529 24.0337 79.419 24.2286 78.5731 24.2286C77.6608 24.2286 76.8025 24.0586 75.998 23.7186C75.1936 23.3702 74.4845 22.8892 73.8708 22.2755C73.2654 21.6618 72.7927 20.9569 72.4527 20.1608C72.1127 19.3563 71.9427 18.4938 71.9427 17.5733C71.9427 16.6859 72.1085 15.8525 72.4403 15.0729C72.772 14.2851 73.2323 13.5967 73.8211 13.0079C74.4099 12.4191 75.0899 11.9588 75.8612 11.6271C76.6408 11.2871 77.4742 11.1171 78.3616 11.1171C79.2655 11.1171 80.0617 11.3244 80.75 11.739C81.4467 12.1454 82.023 12.6679 82.4792 13.3065L82.3672 11.4654ZM78.5109 21.7282C79.2407 21.7282 79.8792 21.5499 80.4266 21.1933C80.9739 20.8284 81.3969 20.3391 81.6955 19.7254C82.0023 19.1117 82.1557 18.4316 82.1557 17.6853C82.1557 16.9306 82.0023 16.2464 81.6955 15.6327C81.3886 15.019 80.9615 14.5338 80.4142 14.1772C79.8751 13.8123 79.2407 13.6299 78.5109 13.6299C77.7894 13.6299 77.1301 13.8123 76.5329 14.1772C75.9358 14.5421 75.4631 15.0314 75.1148 15.6451C74.7665 16.2588 74.5923 16.9389 74.5923 17.6853C74.5923 18.4399 74.7706 19.1241 75.1273 19.7378C75.4922 20.3432 75.969 20.8284 76.5578 21.1933C77.1549 21.5499 77.8059 21.7282 78.5109 21.7282Z"
        fill="#FAFAFA"
      />
      <path
        d="M0 12.7896C0 8.31285 0 6.07445 0.871242 4.36454C1.63761 2.86046 2.86046 1.63761 4.36454 0.871242C6.07445 0 8.31285 0 12.7896 0H19.2104C23.6872 0 25.9255 0 27.6355 0.871242C29.1395 1.63761 30.3624 2.86046 31.1288 4.36454C32 6.07445 32 8.31285 32 12.7896V19.2104C32 23.6872 32 25.9255 31.1288 27.6355C30.3624 29.1395 29.1395 30.3624 27.6355 31.1288C25.9255 32 23.6872 32 19.2104 32H12.7896C8.31285 32 6.07445 32 4.36454 31.1288C2.86046 30.3624 1.63761 29.1395 0.871242 27.6355C0 25.9255 0 23.6872 0 19.2104V12.7896Z"
        fill="url(#paint0_linear_2400_6790)"
      />
      <path
        d="M24.5715 11.8372L20.2897 9.95264L15.9496 11.8372L20.2897 13.7817L20.1441 25.2388C20.1441 25.9089 19.6101 26.9041 19.1537 27.0935C23.0918 27.0935 24.4356 23.8329 24.5715 22.1876V11.8372Z"
        fill="#FAFAFA"
      />
      <path
        d="M15.9434 7.80502L11.6615 5.92371L7.32146 7.80502L11.6615 9.74607V20.168C11.6615 21.4222 12.2732 23.0646 14.487 23.0646C15.3899 23.0646 15.9434 22.7063 15.9434 22.1687V18.1373V7.80502Z"
        fill="#FAFAFA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.79088 6.52983L7.32119 1.92542L6.85151 6.52983L4.58554 4.92735L6.18728 7.19426L0.574219 7.66408L6.18728 8.13391L5.10975 9.8766L6.85151 8.79834L7.31217 16.4268V7.79871L8.67268 8.40978L8.45511 8.13391L12.4351 7.66408L8.45511 7.19426L10.7424 4.24213L7.79088 6.52983Z"
        fill="#FAFAFA"
      />
      <path
        d="M88.7302 13.1763C88.7302 12.0292 89.6602 11.0992 90.8073 11.0992H119.562C120.709 11.0992 121.639 12.0292 121.639 13.1763V22.1337C121.639 23.2809 120.709 24.2108 119.562 24.2108H90.8073C89.6602 24.2108 88.7302 23.2809 88.7302 22.1337V13.1763Z"
        fill="#FAFAFA"
      />
      <path
        d="M96.4255 13.7831H98.2323L95.5498 18.0451V21.5423H94.0201V18.0451L91.3376 13.7831H93.1444L94.785 16.3824L96.4255 13.7831Z"
        fill="#1A1A1F"
      />
      <path
        d="M98.7457 21.5423V13.7831H100.275V21.5423H98.7457Z"
        fill="#1A1A1F"
      />
      <path
        d="M101.44 21.5423V13.7831H106.351V15.3128H102.97V16.6207H105.608V18.1504H102.97V20.0126H106.351V21.5423H101.44Z"
        fill="#1A1A1F"
      />
      <path
        d="M107.245 21.5423V13.7831H108.775V20.0126H111.901V21.5423H107.245Z"
        fill="#1A1A1F"
      />
      <path
        d="M112.791 21.5423V13.7831H115.362C115.898 13.7831 116.399 13.8847 116.864 14.0879C117.334 14.2874 117.746 14.5664 118.1 14.9248C118.459 15.2795 118.738 15.6915 118.937 16.1607C119.14 16.6263 119.242 17.1269 119.242 17.6627C119.242 18.1984 119.14 18.7009 118.937 19.1702C118.738 19.6358 118.459 20.0477 118.1 20.4061C117.746 20.7608 117.334 21.0398 116.864 21.243C116.399 21.4425 115.898 21.5423 115.362 21.5423H112.791ZM114.32 20.0126H115.362C115.68 20.0126 115.979 19.9517 116.26 19.8297C116.545 19.7078 116.796 19.5397 117.014 19.3254C117.232 19.1111 117.402 18.8617 117.524 18.5772C117.649 18.2927 117.712 17.9878 117.712 17.6627C117.712 17.3375 117.649 17.0346 117.524 16.7538C117.402 16.4692 117.232 16.2198 117.014 16.0055C116.8 15.7875 116.55 15.6176 116.266 15.4957C115.985 15.3737 115.684 15.3128 115.362 15.3128H114.32V20.0126Z"
        fill="#1A1A1F"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2400_6790"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFFF" />
          <stop offset="1" stopColor="#1624A5" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
