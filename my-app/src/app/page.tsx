"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getItems, createItem } from "@/lib/api/apiItems";
import List from "@/components/List";


// 데이터 타입 지정
export interface TList {
  id: number;
  name: string;
  iscompleted: boolean;
}

const tenantId = "suhyeon";

// 더미 데이터
const dummyData: TList[] = [
  { id: 1, name: "React 공부하기", iscompleted: true },
  { id: 2, name: "운동하기", iscompleted: true },
  { id: 3, name: "독서 30분", iscompleted: true },
  { id: 4, name: "친구에게 연락하기", iscompleted: true },
  { id: 5, name: "Next.js 프로젝트 진행", iscompleted: true },
];

export default function Home() {
  const [allLists, setAllLists] = useState<TList[]>([]);  // 데이터 저장관리
  const [inputText, setInputText] = useState<string>("");  // 입력창 관리

  // const [todos, setTodos] = useState<TList[]>([]);  // 미완료 리스트
  // const [dones, setDones] = useState<TList[]>([]);  // 완료 리스트

  // 데이터 불러오기
  // useEffect(() => {
  //   getItems(tenantId).then(data =>
  //     setTodos(data)
  //   )
  // }, []);

  // 데이터 생성하기
  // useEffect(() => {
  //   createItem(tenantId, { name: "오느른 5월 28일" }).then(data => {
  //     console.log("response>>>>> ", data)
  //   });
  // }, []);


  useEffect(() => {
    setAllLists(dummyData);
  }, []); // 컴포넌트가 처음 마운트될 때만 실행되도록 빈 배열

  // // todos가 변경될 때마다 dones 갱신
  // useEffect(() => {
  //   const noComplete = allLists.filter((item) => !item.iscompleted);
  //   const yesComplete = allLists.filter((item) => item.iscompleted);
  //   setTodos(noComplete);
  //   setDones(yesComplete);
  // }, [allLists]);



  const submitInputHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("입력되지 않았습니다.");
      return;
    }

    try {
      createItem(tenantId, {
        name: inputText
      }).then(data => console.log("response>>> ", data))
    } catch {
      alert("할 일 추가에 실패했습니다.");
    }
  }

  return (
    <>
      <Header />
      <div>
        {/* 입력창 */}
        <form onSubmit={submitInputHandler}>
          <input className="w-5xl px-4 py-3 m-2 bg-[#F1F5F9] rounded-full border-2 border-[#0F172A] text-gray-700 placeholder:text-gray-400 shadow-[4px_4px_0_0_#0F172A]"
            onChange={e => setInputText(e.target.value)}
            value={inputText}
            placeholder="할 일을 입력해주세요" />
          <button className="px-4 py-3 m-3 bg-[#CBD5E1] rounded-full border-2 shadow-[4px_4px_0_0_#0F172A]" > + 추가하기</button>
        </form>

        <List allLists={allLists} />
      </div>
    </>
  );
}

// todo리스트 관리
// <img src="/img/todo.svg" alt="todo" />
// {todos.length === 0 ? (
//   // todo리스트 없을 경우
//   <div>
//     <img src="/img/Logo_todo.svg" alt="Logo_todo" />
//     <p>
//       할 일이 없어요.
//       <br />
//       TODO를 새롭게 추가해주세요!
//     </p>
//   </div>
// ) : (
//   // 미완료 리스트 관리
//   <div>
//     {todos.filter((item) => !item.iscompleted)
//       .map((item) => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//   </div>
// )}

// {/* done리스트 관리 */}
// <img src="/img/done.svg" />
// {dones.length === 0 ? (
//   // 완료 리스트 없을때
//   <div>
//     <img src="/img/Logo_done.svg" alt="Logo_done" />
//     <p>
//       아직 다 한 일이 없어요
//       <br />
//       해야 할 일을 체크해보세요!
//     </p>
//   </div>
// ) : (
//   <div>{dones.map((item) => (
//     <p key={item.id}>{item.name}</p>
//   ))}</div>
// )}
