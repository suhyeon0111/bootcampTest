import React, { useState, useEffect } from "react";
import { getItems } from "@/lib/api/apiItems";
import { TList } from "@/app/page";
import ListItem from "./ListItem";

interface ListProps {
    allLists: TList[];
}

const tenandId = "suhyeon";

export default function List({ allLists }: ListProps) {
    const [todos, setTodos] = useState<TList[]>([]);  // 미완료 리스트
    const [dones, setDones] = useState<TList[]>([]);  // 완료 리스트

    // todos가 변경될 때마다 dones 갱신
    useEffect(() => {
        const noComplete = allLists.filter((item) => !item.isCompleted);
        const yesComplete = allLists.filter((item) => item.isCompleted);
        setTodos(noComplete);
        setDones(yesComplete);
        console.log("allList >>>> ", allLists);
        console.log("setTodos>>>> ", todos);
        console.log("setDones>>>> ", dones);
    }, [allLists]);

    // 리스트 업데이트
    const handlerRefresh = async () => {
        const updated = await getItems(tenandId);
        const noComplete = updated.filter((item) => !item.isCompleted);
        const yesComplete = updated.filter((item) => item.isCompleted);
        setTodos(noComplete);
        setDones(yesComplete);
        console.log("update response>>>> ", updated);
    };


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
                    {todos.map((item) => (
                        <ListItem key={item.id} item={item} onUpdate={handlerRefresh} />
                    ))}
                </div>
            )}

            {/* done리스트 관리 */}
            <img src="/img/done.svg" alt="doneImg" />
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
                // 완료 리스트 관리
                <div>{dones.map((item) => (
                    <ListItem key={item.id} item={item} onUpdate={handlerRefresh} />
                ))}</div>
            )}
        </>
    )
}