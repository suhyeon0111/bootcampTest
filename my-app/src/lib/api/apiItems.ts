"use client";

const BASE_URL = 'https://assignment-todolist-api.vercel.app/api';

// 항목 조회
export async function getItems(tenantId: string) {
  const res = await fetch(`${BASE_URL}/${tenantId}/items`);
  if (!res.ok) throw new Error('Failed to fetch items');
  return res.json();
}

// 항목 상세 조회
export async function getItemById(tenantId: string, itemId: string) {
  const res = await fetch(`${BASE_URL}/${tenantId}/items/${itemId}`);
  if (!res.ok) throw new Error('Failed to fetch item');
  return res.json();
}

// 항목 생성
export async function createItem(tenantId: string, itemData: any) {
  const res = await fetch(`${BASE_URL}/${tenantId}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  if (!res.ok) throw new Error('Failed to create item');
  return res.json();
}

// 항목 수정
export async function updateItem(tenantId: string, itemId: string, itemData: any) {
  const res = await fetch(`${BASE_URL}/${tenantId}/items/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  if (!res.ok) throw new Error('Failed to update item');
  return res.json();
}

// 항목 삭제 
export async function deleteItem(tenantId: string, itemId: string) {
  const res = await fetch(`${BASE_URL}/${tenantId}/items/${itemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete item');
  return res.json();
}
