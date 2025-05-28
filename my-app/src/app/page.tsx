"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { createItem } from "@/lib/api/apiItems";


const tenantId = "suhyeon";

export default function Home() {
  const [todos, setTodos] = useState([]);  // 데이터 저장관리
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    createItem(tenantId, { name: "오느른 5월 28일" }).then(data => {
      console.log("response>>>>> ", data)
    });
  }, []);

  return (<>
    <div className="bg-red-200 sm:bg-yellow-200 md:bg-green-200 lg:bg-blue-200">
      반응형 배경색
    </div>
    <Header />
    <div>
      <input placeholder="할 일을 입력해주세요" />
      <button>+ 추가하기</button>
    </div>
    <img src="/todo.svg" />
    <div>todo 리스트들</div>
    <img src="/done.svg" />
    <div>완료 리스트들</div>

  </>
  );
}
