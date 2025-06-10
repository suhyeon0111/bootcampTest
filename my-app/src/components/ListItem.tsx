import React from "react";
import { TList } from "@/app/page";
import { updateItem } from "@/lib/api/apiItems";


interface ListItemProps {
    item: TList;
    onUpdate: () => void;
}

const tenandId = "suhyeon"

export default function ListItem({ item, onUpdate }: ListItemProps) {

    // 완료 클릭 함수
    const toggleComplete = async () => {
        try {
            await updateItem(tenandId, item.id, { isCompleted: !item.iscompleted });
            onUpdate();
        } catch (error) {
            console.error("complete error>>> ", error)
        }
    }

    return (
        <div className="flex items-center w-150 h-13 m-4 border-2 border-black rounded-full">
            <img
                src={item.isCompleted ? "/img/icon-complete.svg" : "/img/icon-incomplete.svg"}
                alt={item.isCompleted ? "완료" : "미완료"}
                className="m-2.5"
                onClick={toggleComplete}
            />
            <p className="flex-black text-base">{item.name}</p>
        </div>
    )
}