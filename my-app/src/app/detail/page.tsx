// 상세페이지
"use client"

import React from "react"
import Header from "@/components/Header"


export default function detailPage() {
    return (
        <>
            <Header />
            {/* 검색창 */}
            <div className="flex w-2xl rounded-full border-2 border-black">
                <img src="/img/icon-incomplete.svg" alt="미완료 버튼" />
                <p>비타민 챙겨먹기</p>
                {/* <p>{item.name}</p> */}
            </div>

            <div className="flex gap-4">
                {/* 이미지 삽입 박스 */}
                <div className="relative w-80 h-80 bg-slate-100 border-3 border-dashed border-slate-200 rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center" >
                        <img src="/img/img.svg" alt="이미지" />
                    </div>
                    <button className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-slate-300 rounded-full">
                        <img src="/img/PlusIcon.svg" alt="플러스 아이콘" />
                    </button>
                </div>
                {/* 메모 박스 */}
                <div className="">
                    <img src="/img/memo.svg" alt="메모" />
                </div>
            </div>

            {/* 버튼들 */}
            <div className="flex">
                <button className="flex items-center justify-center gap-2 w-40 h-15 bg-rose-500 gap-2 rounded-full border-2 border-black shadow-[4px_4px_0_0_black] text-slate-100 font-bold">
                    <img src="/img/X.svg" alt="X" />
                    <span>삭제하기</span>
                </button>
                <button className="flex items-center justify-center gap-2 w-40 bg-slate-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_black] text-black font-bold ">
                    <img src="/img/check.svg" alt="check" />
                    <span>수정완료</span>
                </button>
            </div>
        </>
    )
}