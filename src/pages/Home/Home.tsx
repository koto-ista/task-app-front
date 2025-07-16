import React, { useState } from 'react';
import TaskArea from '../../modules/TaskArea';
import { Task } from '../Base';
import {
  DndContext,
  useSensor,
  UniqueIdentifier,
  KeyboardSensor,
  PointerSensor,
  useSensors,
  closestCorners,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const status: Status[] = [
  {
    id: 0,
    status: 'すべて',
    color: 'all',
  },
  {
    id: 1,
    status: '未着手',
    color: 'todo',
  },
  {
    id: 2,
    status: '進行中',
    color: 'inProgress',
  },
  {
    id: 3,
    status: '完了',
    color: 'done',
  },
];

type Status = {
  id: number;
  status: string;
  color: string;
};

interface Props {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  editTask: (task: Task) => void;
}

const Home = (props: Props) => {
  const [tasks, setTasks] = useState<Task[]>(props.tasks);
  const [draggedTasks, setDraggedTasks] = useState<Task[] | null>(null);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  // ステータスによって Tasks を取得する
  const taskListByStatus = (status: Status, tasks: Task[]) => {
    return tasks.filter((task) => task.status === status.id);
  };

  // ステータスIDを取得する
  const getStatusIdFromStatus = (color: string): number | undefined => {
    const target = status.find((s) => s.color === color);
    return target?.id;
  }

  // ドラッグ開始
  const handleDragStart = (event: DragStartEvent) => {
    console.log('start');
    setActiveId(event.active.id);
    setDraggedTasks([...tasks]); // tasksのコピーを作る
  };

  // ドラッグ中
  function handleDragOver(event: DragOverEvent) {
    if (!draggedTasks) return;
    const { active, over } = event;
    // 現在ドラッグしているアイテム（タスク）
    const activeId = Number(active.id);
    // 現在ドラッグしているアイテム（タスク）に近いアイテム（タスク）
    const overId = over ? Number(over.id) : undefined;

    const activeTask = draggedTasks.find((t) => t.id === activeId);
    const overTask = overId ? draggedTasks.find((t) => t.id === overId) : undefined;

    const activeStatus = activeTask?.status;
    const overStatus = overTask?.status ?? (typeof over?.id === "string" ? getStatusIdFromStatus(over.id) : undefined);

    // ステータスが同じなら何もしない
    if (!activeTask || !overStatus || activeStatus === overStatus) return;

    setDraggedTasks((prev) =>
      prev
        ? prev.map((task) =>
          task.id === activeId ? { ...task, status: overStatus } : task
        )
        : null
    );
  };

  // ドラッグ後
  const handleDragEnd = (event: DragEndEvent) => {
    if (draggedTasks) {
      setTasks(draggedTasks); // ここで確定
      // activeIdから該当タスクを取得
      const activeTask = draggedTasks.find(task => task.id === activeId);
      if (activeTask) {
        props.editTask(activeTask); // ここでeditTaskに渡す
      }
      setDraggedTasks(null);  // 一時データをクリア
    }
    setActiveId(null);
  };

  return (
    <div className="home-wrapper">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {status.filter((status) => status.id !== 0)
          .map((status) => (
            <TaskArea
              key={status.id}
              statusColor={status.color}
              statusName={status.status}
              taskList={
                draggedTasks
                  ? taskListByStatus(status, draggedTasks)
                  : taskListByStatus(status, tasks)
              }
            />
          ))}
      </DndContext>
    </div>
  );
};

export default Home;