'use client'

import useConversation from "@/hooks/useConversation"
import useRoutes from "@/hooks/useRoutes"
import MobileItem from "./MobileItem"


const MobileFooter = ({
}) => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if (isOpen) {
        return null
    }


    return (
        <div
            className="
                fixed
                justify-between
                w-full
                bottom-0
                z-40
                flex
                items-center
                bg-white
                border-t-[1px]
                md:hidden
            "
        >
            {routes.map((toute) => (
                <MobileItem 
                    key={toute.label}
                    href={toute.href}
                    icon={toute.icon}
                    active={toute.active}
                    onClick={toute.onClick}
                />
            ))}
        </div>
    )
}

export default MobileFooter