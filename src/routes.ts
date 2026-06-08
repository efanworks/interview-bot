import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import InterviewPage from "@/pages/Interview";
import DebounceTestPage from "@/pages/DebounceTest";
import TransitionTestPage from "@/pages/TransitionTest";
import {
  Tasks,
  TasksRedux,
  TasksZustand
} from "@efanworks/babel-exp/components";
import { Loader } from "./components/Loader";

export const routes: RouteObject[] = [
  { path: "/", element: createElement(InterviewPage) },
  { path: "/dev/debounce", element: createElement(DebounceTestPage) },
  { path: "/dev/transition", element: createElement(TransitionTestPage) },
  { path: "/tasksReducer", element: createElement(Tasks) },
  { path: "/tasksZustand", element: createElement(TasksZustand) },
  { path: "/tasksRedux", element: createElement(TasksRedux) },
  { path: "/vueTasks", element: createElement(Loader) }
];
