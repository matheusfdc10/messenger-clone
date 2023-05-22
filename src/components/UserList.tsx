'use client'

import { User } from '@prisma/client'
import UserBox from './UserBox'
import Avatar from './Avatar'
import { useState } from 'react'
import SettingsModal from './sidebar/SettingsModal'
import { getSession } from 'next-auth/react'

interface UserListProps {
    items: User[];
    user?: User | null;
}

const UserList: React.FC<UserListProps> = ({
    items,
    user
}) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <SettingsModal 
                currentUser={user!}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <aside
                className='
                    fixed
                    inset-y-0
                    pb-20
                    md:pb-0
                    md:left-20
                    md:w-80
                    md:block
                    overflow-y-auto
                    border-r
                    border-gray-200
                    block
                    w-full
                    left-0
                '
            >
                <div className='px-5'>
                    <div className='flex justify-between items-center'>
                        <div
                            className='
                                text-2xl
                                font-bold
                                text-neutral-800
                                py-4
                            '
                        >
                            People
                        </div>
                        <div
                            onClick={() => setIsOpen(true)}
                            className="
                                md:hidden
                                cursor-pointer
                                hover:opacity-75
                                transition
                                mt-2
                            "
                        >
                            <Avatar user={user!} />
                        </div>
                    </div>
                    {items.map((item) => (
                        <UserBox 
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </aside>
        </>
    )
}
export default UserList;