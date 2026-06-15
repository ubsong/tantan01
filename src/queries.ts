import { createServerFn } from '@tanstack/react-start';
import { db } from '#/db.ts';
import { demoUsers } from '#/schema';
import { eq } from 'drizzle-orm';

export const addUser = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string }) => data)
  .handler(async ( { data }) => {
      
    const result = await db.insert(demoUsers).values({
       name: data.name, 
    }).returning();
  

    return result;
}); 


// 유저 삭제 함수
export const deleteUser = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: number }) => data) // 💡 삭제할 유저의 id를 입력값으로 받음
  .handler(async ({ data }) => {
    
    // demoUsers 테이블에서 id가 일치하는 행을 찾아 삭제
    const result = await db
      .delete(demoUsers)
      .where(eq(demoUsers.id, data.id))
      .returning(); // 삭제된 데이터를 확인하기 위해 반환

    return result;
  });