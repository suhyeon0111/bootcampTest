import React from "react";
import { TList } from "@/app/page";


interface ListItemProps {
    item: TList;
}

export default function ListItem({ item }: ListItemProps) {
    return (
        <div className="flex items-center w-150 h-13 m-4 border-2 border-black rounded-full">
            <img
                src={item.iscompleted ? "/img/icon-complete.svg" : "/img/icon-incomplete.svg"}
                alt={item.iscompleted ? "완료" : "미완료"}
                className="m-2.5"
            />
            <p className="flex-black text-base">{item.name}</p>
        </div>
    )
}