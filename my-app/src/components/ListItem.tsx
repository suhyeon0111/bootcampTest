import React from "react";
import { TList } from "@/app/page";


export default function ListItem(TItem: TList) {
    return (
        <>
            <p>{TItem.name}</p>
        </>
    )
}