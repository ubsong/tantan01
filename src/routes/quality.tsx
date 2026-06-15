import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start' 
import { db } from '#/db.ts';
import { demoUsers } from '#/schema';
import { deleteUser } from '#/queries.ts';


const getUser = createServerFn({method: 'GET'}).handler(async () => {
  const users = await db.select().from(demoUsers).limit(10);

  if (!users.length) {
    throw new Error('No users found');
  }

  return users;
})

export const Route = createFileRoute('/quality')({
  loader: async () => {
    const user = await getUser()
    return { user }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter();
  const { user } = Route.useLoaderData()

  return <div className='p-8'>
    <h1 className='text-2xl '>
      {user.map((u) => (
        <div key={u.id} className='border-4 border-blue-800 p-4 mb-1 rounded-2xl'>
          <p className='text-sm'>ID: {u.id}</p>
          <p className='font-semibold text-lg'>Name: {u.name}</p>

          <button onClick={async () => {
            try {
              await deleteUser({ data: { id: u.id } }); 
              router.navigate({ to: '/quality' });
            } catch (error) {
              console.error('Error deleting user:', error);
              alert('사용자 삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
          }} 
          className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-xl mt-2'>
            Delete User 
          </button>
        </div>
      ))}     
     </h1> 
  </div>
}
