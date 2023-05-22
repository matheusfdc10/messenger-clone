

import getConversations from "@/actions/getConversations"
import getUsers from "@/actions/getUsers"
import ConversationList from "@/components/conversations/ConversationList"
import Sidebar from "@/components/sidebar/Sidebar"

export default async function ConversationLayout({
    children
}: { 
    children: React.ReactNode
}) {
    // const conversations = await getConversations()
    // const users = await getUsers()

    const [conversations, users] = await Promise.all([
        getConversations(),
        getUsers()
    ])
    
    return ( 
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
}