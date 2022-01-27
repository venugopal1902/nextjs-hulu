import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline';
function Header() {
    const scaledown = 0.15;
  return (<header className="flex flex-col p-5 sm:flex-row m-1 justify-between items-center h-auto select-none ">
    <div className="flex flex-grow justify-evenly max-w-md">
      <HeaderItem title='HOME' Icon={HomeIcon}/>
      <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
      <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
      <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
      <HeaderItem title='SEARCH' Icon={SearchIcon}/>
      <HeaderItem title='USER' Icon={UserIcon}/>
    </div>
      <Image src='https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png' alt="hulu logo" width={800*scaledown} height={510*scaledown}/>
  </header>);
}

export default Header;
