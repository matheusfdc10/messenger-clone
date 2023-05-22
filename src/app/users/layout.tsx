import getCurrentUser from "@/actions/getCurrentUser";
import getUsers from "@/actions/getUsers";
import UserList from "@/components/UserList";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function UserLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const users = await getUsers()
    const currentUser = await getCurrentUser()

    return (

        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserList items={users} user={currentUser}/>
                {children}
            </div>
        </Sidebar>
    )
}