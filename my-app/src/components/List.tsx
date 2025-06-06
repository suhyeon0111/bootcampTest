import React, { useState, useEffect } from "react";
import { TList } from "@/app/page";

interface ListProps {
    allLists: TList[];
}


export default function List({ allLists }: ListProps) {
    const [todos, setTodos] = useState<TList[]>([]);  // 미완료 리스트
    const [dones, setDones] = useState<TList[]>([]);  // 완료 리스트

    // todos가 변경될 때마다 dones 갱신
    useEffect(() => {
        const noComplete = allLists.filter((item) => !item.iscompleted);
        const yesComplete = allLists.filter((item) => item.iscompleted);
        setTodos(noComplete);
        setDones(yesComplete);
    }, [allLists]);


    return (
        <>
            {/* todo리스트 관리 */}
            <img src="/img/todo.svg" alt="todo" />
            {todos.length === 0 ? (
                // todo리스트 없을 경우 
                <div>
                    <img src="/img/Logo_todo.svg" alt="Logo_todo" />
                    <p>
                        할 일이 없어요.
                        <br />
                        TODO를 새롭게 추가해주세요!
                    </p>
                </div>
            ) : (
                // 미완료 리스트 관리  
                <div>
                    {todos.filter((item) => !item.iscompleted)
                        .map((item) => (
                            <p key={item.id}>{item.name}</p>
                        ))}
                </div>
            )}

            {/* done리스트 관리 */}
            <img src="/img/done.svg" />
            {dones.length === 0 ? (
                // 완료 리스트 없을때 
                <div>
                    <img src="/img/Logo_done.svg" alt="Logo_done" />
                    <p>
                        아직 다 한 일이 없어요
                        <br />
                        해야 할 일을 체크해보세요!
                    </p>
                </div>
            ) : (
                <div>{dones.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}</div>
            )}
        </>
    )
}