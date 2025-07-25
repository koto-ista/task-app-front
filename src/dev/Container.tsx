import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { ItemType, SortableItem } from "./Item";

type ContainerProps = {
  containerId: string;
  items: Array<ItemType>;
};

export function Container(props: ContainerProps) {
  const { containerId, items } = props;

  const { setNodeRef } = useDroppable({
    id: containerId
  });

  return (
    <SortableContext
      id={containerId}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className="flex flex-col gap-4 bg-gray-200 p-4">
        <h1 className="text-center font-black text-4xl text-gray-700">
          {containerId}
        </h1>
        {items.map((item) => (
          <SortableItem key={item.id} {...item} />
        ))}
      </div>
    </SortableContext>
  );
}
