import { ReactNode } from "react"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

interface Link {
    link: string
    icon: string
}

interface IconMapping {
    [photo: string]: ReactNode;
}

const iconMap: IconMapping = {
    home: <HomeOutlinedIcon fontSize="large" />,
    search: <SearchOutlinedIcon fontSize="large" />,
    notifications: <NotificationsNoneOutlinedIcon fontSize="large" />,
};


const LinkCards: React.FC<Link> = ({link, icon}): ReactNode => {
    const iconImage = iconMap[icon.toLowerCase()] || null;

    
    return (
        <div className="flex flex-row gap-5">
            <div>{iconImage}</div>
            <div className="flex h-full text-lg items-center"><p>{link}</p></div>
        </div>
    )
}

export default LinkCards